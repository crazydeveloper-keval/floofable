"use strict"
import http from 'http'
import { messageModel, roomModel, userModel } from 'c:/Users/jp/OneDrive/Desktop/New folder/priavte-chef-backend-apis/src/database';

const ObjectId = require('mongoose').Types.ObjectId

export const socketServer = (app) => {
    const server = new http.Server(app);
    const io = require('socket.io')(server, { cors: true, })
    ioEvents(io);
    return server;
}
let users = {}, roomMember = []
const ioEvents = (io) => {
    // Rooms namespace
    io.of('/room').on('connection', (socket) => {
        console.log('New user arrived in room routes', socket.id);
        // Create a new room

        socket.on('online', async ({ userId }) => {

            // Adding userId into JSON
            users[userId] = (socket.id);
            socket.on('join_room', async ({ roomId, userId }) => {
                roomMember.push(`${roomId}_${userId}`)
                await roomModel.findOneAndUpdate({ _id: ObjectId(roomId), isActive: true, isBlock: false }, { [`count.${userId}`]: 0 })
                socket.join(`${roomId}`)

                socket.on('send_message', async (data) => {
                    // console.log('send_message', data);
                    let { roomId, senderId, receiverId, message } = data, status = 0, update_match: any = { isActive: true, }
                    if (roomMember.indexOf(`${roomId}_${receiverId}`) != -1) status = 2
                    if (users[`${receiverId}`] != null && status == 0) status = 1
                    if (status == 1 || status == 0) update_match[`$inc`] = { [`count.${receiverId}`]: 1 }
                    if (status == 2) update_match[`count.${receiverId}`] = 0

                    await roomModel.updateOne({ _id: ObjectId(data?.roomId), isActive: true, isBlock: false }, update_match)
                    // let userData: any = await userModel.findOne({ _id: ObjectId(data.receiverId), isActive: true, isBlock: false })
                    // let userData1: any = await userModel.findOne({ _id: ObjectId(data.senderId), isActive: true, isBlock: false })
                    // userData1.message = message
                    // let notification = await notification_template.message(userData1)
                    let messageData: any = await new messageModel({
                        receiverId: ObjectId(receiverId),
                        senderId: ObjectId(senderId), status,
                        message, roomId: ObjectId(roomId)
                    }).save()
                    // await notification_to_user(userData || { deviceToken: [] }, notification?.data, notification?.template)
                    data = { senderId, receiverId, message, _id: messageData?._id, createdAt: messageData?.createdAt, status: messageData?.status }
                    io.to(socket?.id).emit('receive_message', data);
                    socket.to(`${roomId}`).emit('receive_message', data)
                });
            });

            socket.on('leave_room', async ({ roomId, userId }) => {
                const index = roomMember.indexOf(`${roomId}_${userId}`);
                if (index > -1) {
                    roomMember.splice(index, 1);
                }
                socket.leave(`${roomId}`)
            })
        })

        socket.on("disconnecting", () => {
            console.log(socket.rooms); // the Set contains at least the socket ID
        });

        socket.on('disconnect', () => {
            // REMOVE FROM SOCKET USERS
            delete users[Object.keys(users)[`${Object.values(users).indexOf(socket.id)}`]]
            socket.disconnect(); // DISCONNECT SOCKET
        });


    })
}
