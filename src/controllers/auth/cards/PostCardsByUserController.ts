import { Request, Response } from 'express';

import CardsServices from '../../../services/cards/cardsServices.js';

async function PostCardsByUserController(req: Request, res: Response) {
  const newCard = req.body;

  newCard.users_id = res.locals.user.id;

  await CardsServices.CreateCard(newCard);

  res.sendStatus(200);
}

export default PostCardsByUserController;
