/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

import __server from '../config/server.js';
import { ErrorLogs } from '../logs/error/funcErrorLogs.js';
import { _ServerErrorMessage } from '../logs/error/messagesErrorLogs.js';
import { _ServerErrorType } from '../logs/error/typesTextErrorLogs.js';

async function ErrorHandlerMiddleware(
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(error);
  if (__server.NODE_ENV === 'development') {
    return res.status(500).json(error);
  }
  const msg = ErrorLogs(_ServerErrorType, _ServerErrorMessage);
  return res.status(500).json(msg);
}

export default ErrorHandlerMiddleware;
