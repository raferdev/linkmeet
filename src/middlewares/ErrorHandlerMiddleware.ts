import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

async function ErrorHandlerMiddleware(
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(error);
  return res.status(500).json(error);
}

export default ErrorHandlerMiddleware;
