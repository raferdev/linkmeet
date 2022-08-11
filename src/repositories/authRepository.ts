import { prisma } from '../config/database.js';
import { SignUpUser } from '../types/authTypes.js';
import { FindedUser } from '../types/repositoriesTypes.js';

async function FindUser(email: string, alias: string) {
  const result: FindedUser | null = await prisma.users.findFirst({
    where: { OR: [{ alias }, { email }] },
    select: { name: true, alias: true, email: true, password: true },
  });

  return result;
}

async function Create(newUser: SignUpUser) {
  return await prisma.users.create({ data: newUser });
}

const AuthRepository = {
  FindUser,
  Create,
};

export default AuthRepository;
