import { NextFunction, Request, Response } from 'express';

import { AuthServices } from '../services/auth/AuthServices.js';

async function RepoConsultMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const newUser = req.body;

  const result = await AuthServices.RepoConsult(newUser, res.locals.process);
  if (res.locals.process === 'signin') {
    res.locals.userDB = result;
  }
  next();
}

export default RepoConsultMiddleware;
