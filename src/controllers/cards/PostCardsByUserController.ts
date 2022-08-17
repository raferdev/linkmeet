import { Request, Response } from 'express';

import CardsServices from '../../services/cards/cardsServices.js';

async function PostCardsByUserController(req: Request, res: Response) {
  const newCard = req.body;

  const users_id = res.locals.user.id;

  const result = await CardsServices.CreateCard(newCard, users_id);

  res.status(200).send(result);
}

export default PostCardsByUserController;
