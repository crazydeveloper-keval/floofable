import * as bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { mongooseConnection } from './database'
import { router } from './routes'
import http from 'http';
import cors from 'cors'
import { Server } from 'socket.io';
import { socketEvents ,socketConfig} from '../socket'
import { createServer } from 'http'; //replaces (import socketIo from 'socket.io')
import * as admin from 'firebase-admin';
import { ServiceAccount } from "firebase-admin";
import config from 'config'


const app = express();
// const httpServer = createServer(app);
// export const io = new Server(4578, { cors: { origin: '*' } });
app.use(mongooseConnection)
app.use(cors())


const health = async(req, res) => {
  // console.log("aaaa")
  // const token = await stripe.tokens.create({
  //   card: {
  //     number: '4242424242424242',
  //     exp_month: 6,
  //     exp_year: 2023,
  //     cvc: '314',
  //   },
  // });



  // const customer = await stripe.customers.create({
  //   description: 'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
  //   source:token.id
  // });
  // console.log(customer)

  // const charge = await stripe.charges.create({
  //   amount: 2000,
  //   currency: 'usd',
  //   customer: customer.id
  //   // receipt_email: ''
  //   // description: 'My First Test Charge (created for API docs at https://www.stripe.com/docs/api)',
  // });
  // console.log(charge)
  // console.log(charge,"jayra")
  // const customer = await stripe.customers.create();
  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: 20000,
  //   currency: 'inr',
  //   payment_method_types: ['card'],
  //   customer:customer.id
  // });
  // await stripe.paymentIntents.confirm(paymentIntent.id, {
  //   payment_method: 'pm_card_mastercard',
  // });
  // console.log(paymentIntent,"fdgfdgfdg")
    return res.status(200).json({
        message: "Floofable backend server is running",
        app: "Floofable backend server is running",
        version: "Floofable backend server is running",
        author: "Floofable backend server is running",
        license: "Floofable backend server is running",
        contributors: "Floofable backend server is running"
    })
}
app.get('/', health);
app.get('/', health);
app.use(express.json());
app.get('/health', health);
app.get('/isServerUp', (req, res) => {
    res.send('Server is running ');
});
//Firebase - start Set the config options

  
 
  //Firebase - End.
// socketConfig(io,app);
app.use(router)
let server = new http.Server(app);
export default server;