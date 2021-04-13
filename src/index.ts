import 'reflect-metadata';

import express from 'express';
import dotenv from 'dotenv-safe';
import { useExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import UserController from './controllers/UserController';

dotenv.config();

useContainer(Container);

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

useExpressServer(app, {
  controllers: [UserController],
});

app.listen(5000, () => {
  console.log('Server started listening on port 5000');
});
