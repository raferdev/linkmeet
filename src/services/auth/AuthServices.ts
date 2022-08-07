import bcrypt from 'bcrypt';

import __server from '../../config/server.js';
import { ErrorLogs } from '../../logs/error/funcErrorLogs.js';
import {
  _hashBcryptMessage,
  _notUniqueMessage,
} from '../../logs/error/messagesErrorLogs.js';
import {
  _hashBcryptType,
  _notUniqueType,
} from '../../logs/error/typesTextErrorLogs.js';
import AuthRepository from '../../repositories/AuthRepository.js';
import { SignUp } from '../../types/authTypes.js';

async function IsUnique(user: SignUp) {
  const { alias, email } = user;
  const result = await AuthRepository.Find(email, alias);
  if (result) {
    throw ErrorLogs(_notUniqueType, _notUniqueMessage);
  }
  return true;
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

export const AuthServices = {
  IsUnique,
  CreateNewUser,
};
