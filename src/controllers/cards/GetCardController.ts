import { Request, Response } from 'express';

import CardsServices from '../../services/cards/cardsServices.js';

async function GetCardController(req: Request, res: Response) {
  const url = req.query.id;
  if (!url) {
    return res.sendStatus(500);
  }

  const result = await CardsServices.GetByUrl(url.toString());

  res.status(200).send(result);
}

export default GetCardController;
