import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import __server from '../config/server.js';
import { ErrorLogs } from '../logs/error/funcErrorLogs.js';
import { _TokenIsMissingMessage } from '../logs/error/messagesErrorLogs.js';
import {
  _TokenInvalidType,
  _TokenIsMissingType,
} from '../logs/error/typesTextErrorLogs.js';

async function AuthTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    const errorLog = ErrorLogs(_TokenIsMissingType, _TokenIsMissingMessage);
    return res.status(401).json(errorLog);
  }

  if (authorization.slice(0, 7) !== 'Bearer ') {
    const errorLog = ErrorLogs(_TokenInvalidType, _TokenIsMissingMessage);
    return res.status(422).json({ errorLog });
  }

  const token = authorization.split(' ')[1];

  const userJWT = jwt.verify(token, __server.JWT_SECRET);

  res.locals.user = userJWT;

  next();
}

export default AuthTokenMiddleware;
