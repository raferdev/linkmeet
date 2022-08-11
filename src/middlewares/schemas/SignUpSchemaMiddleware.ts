import { NextFunction, Request, Response } from 'express';

import { ErrorLogs } from '../../logs/error/funcErrorLogs.js';
import { _schemaErrorMessage } from '../../logs/error/messagesErrorLogs.js';
import { _schemaErrorType } from '../../logs/error/typesTextErrorLogs.js';
import { SignUpSchema } from '../../schemas/authSchemas.js';
import { SignUpUser } from '../../types/authTypes.js';

async function SignUpSchemaMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const newUser: SignUpUser = req.body;

  const { error } = SignUpSchema.validate(newUser, { abortEarly: false });

  if (error) {
    throw ErrorLogs(_schemaErrorType, _schemaErrorMessage);
  }

  next();
}

export default SignUpSchemaMiddleware;
