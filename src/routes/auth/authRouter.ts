import { Router } from 'express';

import SignInController from '../../controllers/auth/SignInController.js';
import SignUpController from '../../controllers/auth/SignUpController.js';
import SignInSchemaMiddleware from '../../middlewares/schemas/SignInSchemaMiddleware.js';
import SignUpSchemaMiddleware from '../../middlewares/schemas/SignUpSchemaMiddleware.js';
import SignInRepoConsultMiddleware from '../../middlewares/SignInRepoConsultMiddleware.js';
import SignUpRepoConsultMiddleware from '../../middlewares/SignUpRepoConsultMiddleware.js';

const authRouter = Router();

authRouter.post(
  '/signup',
  SignUpSchemaMiddleware,
  SignUpRepoConsultMiddleware,
  SignUpController,
);

authRouter.post(
  '/signin',
  SignInSchemaMiddleware,
  SignInRepoConsultMiddleware,
  SignInController,
);

export default authRouter;
