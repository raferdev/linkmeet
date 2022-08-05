import { NextFunction, Request, Response } from 'express';

import { ErrorLogs } from '../../logs/error/funcErrorLogs.js';
import { _schemaErrorMessage } from '../../logs/error/messagesErrorLogs.js';
import { _schemaErrorType } from '../../logs/error/typesTextErrorLogs.js';
import { signUpSchema } from '../../schemas/authSchemas.js';
import { SignUp } from '../../types/authTypes.js';

async function SignUpSchemaMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const newUser: SignUp = req.body;
  const { error } = signUpSchema.validate(newUser, { abortEarly: false });
  if (error) {
    throw ErrorLogs(_schemaErrorType, _schemaErrorMessage);
  }

  next();
}

export default SignUpSchemaMiddleware;
