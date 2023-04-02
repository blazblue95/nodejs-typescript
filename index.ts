import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { HelloMessage, UserAccount } from './controller/hello';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', HelloMessage)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});