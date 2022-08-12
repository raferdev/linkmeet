import { Request, Response } from 'express';

import CardsServices from '../../../services/cards/cardsServices.js';

async function GetCardsByUserController(req: Request, res: Response) {
  const { id } = res.locals.user;
  const result = await CardsServices.FindCardsByUser(id);

  res.status(200).send(result);
}

export default GetCardsByUserController;
