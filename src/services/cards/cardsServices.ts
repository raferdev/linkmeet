import { v4 as uuidv4 } from 'uuid';

import CardsRepository from '../../repositories/cardsRepository.js';
import { createManyType, NewCardSchemaType } from '../../types/cardsTypes.js';

async function CreateCard(card: NewCardSchemaType, users_id: number) {
  const url = uuidv4();

  const urls = [
    card.link1,
    card.link2,
    card.link3,
    card.link4,
    card.link5,
    card.link6,
  ];
  const data: createManyType[] = [];

  urls.forEach((url, i) => {
    if (url !== '') {
      const result = url.replace(/.+\/\/|www.|\..+/g, '');
      const number = i + 1;
      const link = {
        name: result,
        description: `link${number}`,
        link: urls[i],
      };
      data.push(link);
    }
  });

  const cardInput = {
    alias: '',
    title: card.title,
    description: card.description,
    img: card.img,
    role: card.role,
    url,
    users_id: users_id,
    links: { createMany: { data } },
  };

  await CardsRepository.Create(cardInput);

  return url;
}

async function GetByUrl(url: string) {
  return await CardsRepository.FindCard(url);
}

async function FindCardsByUser(userId: number) {
  return await CardsRepository.FindByUser(userId);
}

const CardsServices = {
  CreateCard,
  FindCardsByUser,
  GetByUrl,
};

export default CardsServices;
