import { Request, Response } from 'express';

import { AuthServices } from '../../services/auth/AuthServices.js';
import { SignIn } from '../../types/authTypes.js';

export default async function SignUpController(req: Request, res: Response) {
  const userBody: SignIn = req.body;
  const userDb: SignIn = res.locals.userDB;

  await AuthServices.LoginUser(userBody, userDb);

  return res.sendStatus(201);
}
