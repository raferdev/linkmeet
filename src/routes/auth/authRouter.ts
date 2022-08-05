import { Router } from 'express';

import SignUpController from '../../controllers/auth/SignUpController.js';
import IsUniqueMiddleware from '../../middlewares/IsUniqueMiddleware.js';
import SignUpSchemaMiddleware from '../../middlewares/schemas/SignUpSchemaMiddleware.js';

const authRouter = Router();

authRouter.post(
  '/signup',
  SignUpSchemaMiddleware,
  IsUniqueMiddleware,
  SignUpController,
);

export default authRouter;
