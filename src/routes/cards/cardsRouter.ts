import { Router } from 'express';

import GetCardController from '../../controllers/cards/GetCardController.js';
import GetCardsByUserController from '../../controllers/cards/GetCardsByUserController.js';
import PostCardsByUserController from '../../controllers/cards/PostCardsByUserController.js';
import AuthTokenMiddleware from '../../middlewares/AuthTokenMiddleware.js';
import NewCardsSchemaMiddleware from '../../middlewares/schemas/NewCardsSchemaMiddleware.js';

const cardsRouter = Router();
cardsRouter.get('/card', GetCardController);
cardsRouter.get('/cards', AuthTokenMiddleware, GetCardsByUserController);
cardsRouter.post(
  '/user/cards',
  NewCardsSchemaMiddleware,
  AuthTokenMiddleware,
  PostCardsByUserController,
);

export default cardsRouter;
