import { createManyType } from './cardsTypes.js';

export type storedPassword = {
  password: string;
};

export type FindedUser = {
  email: string;
  alias: string;
  id: number;
  name: string;
  password: string;
};

export type FindedUserToken = Omit<FindedUser, 'password'>;

export type CardsCreateInput = {
  alias: string;
  name: string;
  description: string;
  url: string;
  users_id: number;
};

export type CardsCreateWithLInkInput = {
  alias: string;
  title: string;
  description: string;
  url: string;
  img: string;
  role: string;
  users_id: number;
  links: { createMany: { data: createManyType[] } };
};

export type TypesCreateInputType = {
  name: string;
};
