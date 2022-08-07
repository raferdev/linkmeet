import { faker } from '@faker-js/faker';

function SignUpUser() {
  const newUser = {
    alias: faker.name.firstName(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  return newUser;
}

const AuthFactory = {
  SignUpUser,
};

export default AuthFactory;
