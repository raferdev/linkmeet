import { prisma } from '../config/database.js';
import { SignUp } from '../types/authTypes.js';

async function Find(email: string, alias: string) {
  const result = await prisma.users.findFirst({
    where: { email, alias },
    select: { name: true, alias: true, email: true },
  });
  return result;
}

async function Create(newUser: SignUp) {
  return await prisma.users.create({ data: newUser });
}

const AuthRepository = {
  Find,
  Create,
};

export default AuthRepository;
