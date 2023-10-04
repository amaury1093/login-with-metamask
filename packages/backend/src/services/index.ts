import express from 'express';

import { authRouter } from './auth';
import { userRouter } from './users';

export const services = express.Router();

services.use('/auth', authRouter);
services.use('/users', userRouter);
