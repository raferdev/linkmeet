import { v4 as uuidv4 } from 'uuid';

import CardsRepository from '../../repositories/cardsRepository.js';
import { CardsCreateWithLInkInput } from '../../types/repositoriesTypes.js';
async function CreateCard(card: CardsCreateWithLInkInput) {
  const url = uuidv4();

  card.url = url;

  await CardsRepository.CreateWithLink(card);

  return url;
}
async function FindCardsByUser(userId: number) {
  return await CardsRepository.FindByUser(userId);
}

const CardsServices = {
  CreateCard,
  FindCardsByUser,
};

export default CardsServices;
