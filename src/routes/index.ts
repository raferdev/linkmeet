import { Router } from 'express';

import authRouter from './auth/authRouter.js';
import cardsRouter from './cards/cardsRouter.js';

const router = Router();

router.use(authRouter);
router.use(cardsRouter);

export default router;
