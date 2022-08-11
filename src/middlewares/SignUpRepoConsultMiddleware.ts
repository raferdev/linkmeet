import { NextFunction, Request, Response } from 'express';

import { AuthServices } from '../services/auth/authServices.js';

async function SignUpRepoConsultMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const newUser = req.body;

  await AuthServices.SignUpRepoConsult(newUser);

  next();
}

export default SignUpRepoConsultMiddleware;
