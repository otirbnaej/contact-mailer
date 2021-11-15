import * as http from 'http';
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { router } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

export { server };
