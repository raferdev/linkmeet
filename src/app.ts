import cors from 'cors';
import express, { json } from 'express';
import 'express-async-errors';
import helmet from 'helmet';

import router from './routes/index.js';

const app = express();

app.use(cors());
app.use(json());
app.use(helmet());

app.use(router);
export default app;
