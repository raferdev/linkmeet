import joi from 'joi';

import { SignIn, SignUp } from '../types/authTypes.js';

export const signUpSchema = joi.object<SignUp>({
  alias: joi.string().required(),
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});

export const signInSchema = joi.object<SignIn>({
  identifier: joi.string().required(),
  password: joi.string().required(),
});
