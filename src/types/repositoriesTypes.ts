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
  name: string;
  description: string;
  url: string;
  users_id: number;
  links?: {
    name: string;
    alias: string;
    description: string;
    types_id: string;
  };
};
