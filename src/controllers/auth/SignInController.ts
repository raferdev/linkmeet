import { Request, Response } from 'express';

import { AuthServices } from '../../services/auth/authServices.js';
import { SignInUser } from '../../types/authTypes.js';
import { FindedUser } from '../../types/repositoriesTypes.js';

export default async function SignInController(req: Request, res: Response) {
  const userBody: SignInUser = req.body;
  const userDb: FindedUser = res.locals.userDB;

  const result = await AuthServices.LoginUser(userBody, userDb);

  res.cookie('token', result.tokenCookie);

  return res.send(result.body).status(200);
}
