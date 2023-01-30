import { userModel } from "./src/database";
import mongoose from 'mongoose'
const ObjectId = mongoose.Types.ObjectId

export const socketConfig = (socket:any,app:any) =>{
  
    socket.use( async (socket, next) => {
       
        let userId = socket.request._query['id'];
        let userSocketId = socket.id;
        
        let response = await userModel.findOne({ _id:ObjectId(userId)})
        
        // const response = await helper.addSocketId( userId, userSocketId);
        // const response = "dbfjnjkdsnjskfds";
        if(response &&  response !== null){
            let response = await userModel.findOneAndUpdate({ _id: ObjectId(userId)}, {socketId:userSocketId})
            if(!response){
               
            }
            next();
        }else{
            
        }
    });
    socketEvents(socket);
    
}
export const socketEvents = (socket:any) =>{
    let io = socket
    socket.on('connection', (socket) => {
        
    
    
    socket.on('driversendloc', async function(anotherSocketId, msg,id,driverid,status) {
       
            let response = await userModel.findOne({socketId:anotherSocketId,_id:ObjectId(id)})
            if(response){
                
            io.to(anotherSocketId).emit("driversendlocuuu", socket.id, msg,id,driverid,status);
            }
            else{
                let response1 = await userModel.findOne({_id:ObjectId(id)})
                io.to(response1.socketId).emit("driversendlocuuu", socket.id, msg,id,driverid,status);
            }
        // socket.broadcast.emit('driverLocChanged', {
        //     id: socket.id,
        //     latLong: data.latLong
        // })
    }) 
    socket.on('driversendotpverify', async function(anotherSocketId, msg,driverid,status) {
            
        io.to(anotherSocketId).emit("usersendverifyotp", msg,driverid,status);
        
    })
    socket.on('driversendlocfive',  async function(id, msg) {
       
        let response = await userModel.findOneAndUpdate({ _id: ObjectId(id)}, {isLocation:msg.location})
        if(response){
        }
    })
    socket.on('addLatLong', async (id, location) => {
        // const Result = await Event.insertlatlong(id, location, socket.id);
      });
    
    
    
    socket.on('locChanged', function(data) {
       
    
        socket.broadcast.emit('driverLocChanged', {
            id: socket.id,
            latLong: data.latLong
        })
    });
    
    
    socket.on('disconnect', async () => {
    
        // const isLoggedOut = await Event.logoutUser(socket.id);
    
        socket.broadcast.emit('chatlistres', {
            userDisconnected: true,
            socket_id: socket.id
        });
    });
        });
}

export const socketsendappointment = (socket:any,i,d) =>{
    let io = socket
    io.to(d).emit("appointmentsenddriver", i);
    // io.emit("appointmentsenddriver", i);
    // socket.broadcast.emit("appointmentsenddriver", "hiiiiii");   // set the particular array socket ids emit
}

export const socketsenddriverdetails = (socket:any,i,j) =>{
    let io = socket
    io.to(j).emit("socketsenddriverdetails", i);
}
export const cancelbyuser = (socket:any,i) =>{
    let io = socket
    io.to(i).emit("cancelbyuser", "Appointment Cancel By user");
}
export const cancelbydriver = (socket:any,i) =>{
    let io = socket
    io.to(i).emit("cancelbydriver", "Appointment Cancel By driver");
}

