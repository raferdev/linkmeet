import { prisma } from '../config/database.js';
import { CardsCreateWithLInkInput } from '../types/repositoriesTypes.js';

async function FindByUser(userId: number) {
  return await prisma.cards.findMany({ where: { id: userId } });
}

async function Create(data: CardsCreateWithLInkInput) {
  return await prisma.cards.create({ data });
}

async function FindCard(data: string) {
  return await prisma.cards.findFirst({
    where: { url: data },
    select: {
      title: true,
      img: true,
      role: true,
      description: true,
      links: {
        select: {
          name: true,
          description: true,
          link: true,
        },
      },
    },
  });
}

const CardsRepository = {
  FindByUser,
  Create,
  FindCard,
};

export default CardsRepository;
