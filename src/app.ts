import cors from 'cors';
import express, { json } from 'express';
import 'express-async-errors';
import helmet from 'helmet';

import ErrorHandlerMiddleware from './middlewares/ErrorHandlerMiddleware.js';
import router from './routes/index.js';

const app = express();

try {
  app.use(cors());
  app.use(json());
  app.use(helmet());
  app.use(router);
  app.use(ErrorHandlerMiddleware);
} catch (e) {
  console.log(e);
}

export default app;
