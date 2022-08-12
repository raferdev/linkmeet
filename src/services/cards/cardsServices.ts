import CardsRepository from '../../repositories/cardsRepository.js';
import { CardsCreateInput } from '../../types/repositoriesTypes.js';

async function CreateCard(card: CardsCreateInput) {
  await CardsRepository.Create(card);
}
async function FindCardsByUser(userId: number) {
  return await CardsRepository.FindByUser(userId);
}

const CardsServices = {
  CreateCard,
  FindCardsByUser,
};

export default CardsServices;
