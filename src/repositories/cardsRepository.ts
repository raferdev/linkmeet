import { prisma } from '../config/database.js';
import { CardsCreateWithLInkInput } from '../types/repositoriesTypes.js';

async function FindByUser(userId: number) {
  return await prisma.cards.findMany({ where: { id: userId } });
}

async function Create(data: CardsCreateWithLInkInput) {
  return await prisma.cards.create({ data: data });
}

async function CreateWithLink(data: CardsCreateWithLInkInput) {
  return await prisma.cards.create({ data: data });
}

const CardsRepository = {
  FindByUser,
  Create,
  CreateWithLink,
};

export default CardsRepository;
