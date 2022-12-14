import joi from 'joi';

import { NewCardSchemaType } from '../types/cardsTypes.js';

export const NewCardSchema = joi.object<NewCardSchemaType>({
  title: joi.string().min(3).max(20).required(),
  img: joi.string().required(),
  role: joi.string().max(9).required(),
  description: joi.string().min(3).max(77).required(),
  link1: joi.string().allow('').required(),
  link2: joi.string().allow('').required(),
  link3: joi.string().allow('').required(),
  link4: joi.string().allow('').required(),
  link5: joi.string().allow('').required(),
  link6: joi.string().allow('').required(),
});
