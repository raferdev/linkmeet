import { NextFunction, Request, Response } from 'express';

import { ErrorLogs } from '../../logs/error/funcErrorLogs.js';
import { _schemaErrorMessage } from '../../logs/error/messagesErrorLogs.js';
import { _schemaErrorType } from '../../logs/error/typesTextErrorLogs.js';
import { signInSchema } from '../../schemas/authSchemas.js';
import { SignUp } from '../../types/authTypes.js';

async function SignInSchemaMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const newUser: SignUp = req.body;
  const { error } = signInSchema.validate(newUser, { abortEarly: false });
  if (error) {
    throw ErrorLogs(_schemaErrorType, _schemaErrorMessage);
  }
  res.locals.process = 'signin';
  next();
}

export default SignInSchemaMiddleware;
