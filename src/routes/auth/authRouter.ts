import { Router } from 'express';

import SignUpController from '../../controllers/auth/SignUpController.js';
import RepoConsultMiddleware from '../../middlewares/IsUniqueMiddleware.js';
import SignInSchemaMiddleware from '../../middlewares/schemas/SignInSchemaMiddleware.js';
import SignUpSchemaMiddleware from '../../middlewares/schemas/SignUpSchemaMiddleware.js';

const authRouter = Router();

authRouter.post(
  '/signup',
  SignUpSchemaMiddleware,
  RepoConsultMiddleware,
  SignUpController,
);

authRouter.post(
  '/signin',
  SignInSchemaMiddleware,
  RepoConsultMiddleware,
  SignUpController,
);

export default authRouter;
