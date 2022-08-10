import bcrypt from 'bcrypt';

import __server from '../../config/server.js';
import { ErrorLogs } from '../../logs/error/funcErrorLogs.js';
import {
  _hashBcryptMessage,
  _NotFoundMessage,
  _notUniqueMessage,
} from '../../logs/error/messagesErrorLogs.js';
import {
  _hashBcryptType,
  _InvalidCredentials,
  _NotFoundType,
  _notUniqueType,
} from '../../logs/error/typesTextErrorLogs.js';
import AuthRepository from '../../repositories/AuthRepository.js';
import { SignIn, SignUp } from '../../types/authTypes.js';

async function RepoConsult(user: SignUp, type: string) {
  const { alias, email } = user;
  const result = await AuthRepository.Find(email, alias);
  if (result && type === 'signup') {
    throw ErrorLogs(_notUniqueType, _notUniqueMessage);
  }
  if (!result && type === 'signin') {
    throw ErrorLogs(_NotFoundType, _NotFoundMessage);
  }
  return result;
}

async function CreateNewUser(user: SignUp) {
  return bcrypt.hash(user.password, __server.SALT, async (error, hash) => {
    if (error) {
      throw ErrorLogs(_hashBcryptType, _hashBcryptMessage);
    }
    user.password = hash;
    return await AuthRepository.Create(user);
  });
}

async function LoginUser(user: SignIn, userDB: SignIn) {
  return bcrypt.compare(
    user.password,
    userDB.password,
    async (error, result) => {
      if (error) {
        throw ErrorLogs(_hashBcryptType, _hashBcryptMessage);
      }
      if (!result) {
        throw ErrorLogs(_InvalidCredentials, _InvalidCredentialsMessage);
      }
      user.password = hash;
      return await AuthRepository.Create(user);
    },
  );
}
export const AuthServices = {
  RepoConsult,
  CreateNewUser,
  LoginUser,
};
