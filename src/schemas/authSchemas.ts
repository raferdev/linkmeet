import joi from 'joi';

import { SignInUser, SignUpUser } from '../types/authTypes.js';

export const SignUpSchema = joi.object<SignUpUser>({
  alias: joi.string().min(3).max(10).required(),
  name: joi.string().min(3).max(10).required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).max(12).required(),
});

export const SignInSchema = joi.object<SignInUser>({
  identifier: joi.string().required(),
  password: joi.string().min(3).max(12).required(),
});
