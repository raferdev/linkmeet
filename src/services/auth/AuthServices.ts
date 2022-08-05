import { ErrorLogs } from '../../logs/error/funcErrorLogs.js';
import { _notUniqueMessage } from '../../logs/error/messagesErrorLogs.js';
import { _notUniqueType } from '../../logs/error/typesTextErrorLogs.js';
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
  await AuthRepository.Create(user);
}

export const AuthServices = {
  IsUnique,
  CreateNewUser,
};
