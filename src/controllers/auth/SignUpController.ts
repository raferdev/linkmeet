import { Request, Response } from 'express';

import { AuthServices } from '../../services/auth/authServices.js';
import { SignUpUser } from '../../types/authTypes.js';

export default async function SignUpController(req: Request, res: Response) {
  const newUser: SignUpUser = req.body;

  await AuthServices.CreateNewUser(newUser);

  return res.sendStatus(201);
}
