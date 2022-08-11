import { NextFunction, Request, Response } from 'express';

import { ErrorLogs } from '../../logs/error/funcErrorLogs.js';
import { _schemaErrorType } from '../../logs/error/typesTextErrorLogs.js';
import { SignInSchema } from '../../schemas/authSchemas.js';
import { SignInUser } from '../../types/authTypes.js';

async function SignInSchemaMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const newUser: SignInUser = req.body;
  const { error } = SignInSchema.validate(newUser, { abortEarly: false });
  if (error) {
    throw ErrorLogs(_schemaErrorType, error.message);
  }

  next();
}

export default SignInSchemaMiddleware;
