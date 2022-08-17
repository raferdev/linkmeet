import { NextFunction, Request, Response } from 'express';

import { ErrorLogs } from '../../logs/error/funcErrorLogs.js';
import { _schemaErrorType } from '../../logs/error/typesTextErrorLogs.js';
import { NewCardSchema } from '../../schemas/cardsSchemas.js';
import { NewCardSchemaType } from '../../types/cardsTypes.js';

async function NewCardsSchemaMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const newUser: NewCardSchemaType = req.body;
  const { error } = NewCardSchema.validate(newUser, { abortEarly: false });
  if (error) {
    throw ErrorLogs(_schemaErrorType, error.message);
  }

  next();
}

export default NewCardsSchemaMiddleware;
