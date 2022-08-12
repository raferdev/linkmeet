import { prisma } from '../config/database.js';
import { CardsCreateInput } from '../types/repositoriesTypes.js';

async function FindByUser(userId: number) {
  return await prisma.cards.findMany({ where: { id: userId } });
}

async function Create(data: CardsCreateInput) {
  return await prisma.cards.create({ data: data });
}

const CardsRepository = {
  FindByUser,
  Create,
};

export default CardsRepository;
