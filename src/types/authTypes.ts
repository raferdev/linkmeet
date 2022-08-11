export type SignUpUser = {
  alias: string;
  name: string;
  email: string;
  password: string;
};
export type SignInUser = {
  identifier: string;
  password: string;
};

export type SignInBody = {
  alias: string;
  name: string;
  email: string;
  token: string;
};
