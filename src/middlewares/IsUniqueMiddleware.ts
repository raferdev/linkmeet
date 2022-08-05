import { NextFunction, Request, Response } from 'express';

import { AuthServices } from '../services/auth/AuthServices.js';

async function IsUniqueMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const newUser = req.body;

  await AuthServices.IsUnique(newUser);

  next();
}

export default IsUniqueMiddleware;
