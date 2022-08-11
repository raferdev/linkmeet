import { NextFunction, Request, Response } from 'express';

import { AuthServices } from '../services/auth/authServices.js';

async function SignInRepoConsultMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const newUser = req.body;

  const result = await AuthServices.SignInRepoConsult(newUser);

  res.locals.userDB = result;

  next();
}

export default SignInRepoConsultMiddleware;
