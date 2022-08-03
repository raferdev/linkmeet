import { Request, Response, Router } from 'express';

const authRouter = Router();

authRouter.get('/login', (req: Request, res: Response) => {
  res.send({ message: 'hellooo' });
});

export default authRouter;
