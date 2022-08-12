import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import __server from '../../config/server.js';
import { ErrorLogs } from '../../logs/error/funcErrorLogs.js';
import {
  _InvalidCredentialsMessage,
  _NotFoundMessage,
  _notUniqueMessage,
} from '../../logs/error/messagesErrorLogs.js';
import {
  _InvalidCredentialsType,
  _NotFoundType,
  _notUniqueType,
} from '../../logs/error/typesTextErrorLogs.js';
import AuthRepository from '../../repositories/authRepository.js';
import { SignInBody, SignInUser, SignUpUser } from '../../types/authTypes.js';
import { FindedUser, FindedUserToken } from '../../types/repositoriesTypes.js';

async function SignInRepoConsult(user: SignInUser) {
  const { identifier } = user;

  const email = identifier;
  const alias = identifier;

  const result = await AuthRepository.FindUser(email, alias);

  if (!result) {
    throw ErrorLogs(_NotFoundType, _NotFoundMessage);
  }

  return result;
}

async function SignUpRepoConsult(user: SignUpUser) {
  const { alias, email } = user;

  const result = await AuthRepository.FindUser(email, alias);

  if (result) {
    throw ErrorLogs(_notUniqueType, _notUniqueMessage);
  }

  return result;
}

async function CreateNewUser(user: SignUpUser) {
  const hash = await bcrypt.hash(user.password, __server.SALT);

  user.password = hash;

  return await AuthRepository.Create(user);
}

async function LoginUser(user: SignInUser, userDB: FindedUser) {
  const result = await bcrypt.compare(user.password, userDB.password);

  if (!result) {
    throw ErrorLogs(_InvalidCredentialsType, _InvalidCredentialsMessage);
  }
  return TokenSessions(userDB);
}

async function TokenSessions(user: FindedUser) {
  const token = jwt.sign(user, __server.JWT_SECRET, {
    expiresIn: '12h',
  });
  const tokenCookie = jwt.sign(user, __server.JWT_SECRET);

  const body: SignInBody = {
    email: user.email,
    alias: user.alias,
    name: user.name,
    token: token,
  };
  return { body, tokenCookie };
}
export const AuthServices = {
  SignUpRepoConsult,
  SignInRepoConsult,
  CreateNewUser,
  LoginUser,
};
