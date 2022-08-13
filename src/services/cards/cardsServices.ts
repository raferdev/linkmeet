import CardsRepository from '../../repositories/cardsRepository.js';
import { CardsCreateWithLInkInput } from '../../types/repositoriesTypes.js';

async function CreateCard(card: CardsCreateWithLInkInput) {
  if (!card.links) {
    await CardsRepository.Create(card);
  }
  if (card.links) {
    await CardsRepository.CreateWithLink(card);
  }
}
async function FindCardsByUser(userId: number) {
  return await CardsRepository.FindByUser(userId);
}

const CardsServices = {
  CreateCard,
  FindCardsByUser,
};

export default CardsServices;
