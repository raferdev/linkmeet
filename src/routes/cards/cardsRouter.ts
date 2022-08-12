import { Router } from 'express';

import GetCardsByUserController from '../../controllers/auth/cards/GetCardsByUserController.js';
import PostCardsByUserController from '../../controllers/auth/cards/PostCardsByUserController.js';
import AuthTokenMiddleware from '../../middlewares/AuthTokenMiddleware.js';

const cardsRouter = Router();

cardsRouter.get('/cards', AuthTokenMiddleware, GetCardsByUserController);
cardsRouter.post('/user/cards', AuthTokenMiddleware, PostCardsByUserController);

export default cardsRouter;
