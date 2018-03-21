import jwt from 'express-jwt';
import express from 'express';

import config from '../../config';
import * as controller from './controller';

const router = express.Router();

/** GET /api/users */
router.route('/').get(controller.find);

/** GET /api/users/:userId */
/** Authenticated route */
router.route('/:userId').get(jwt({ secret: config.secret }), controller.get);

/** POST /api/users */
router.route('/').post(controller.create);

/** PATCH /api/users/:userId */
/** Authenticated route */
router
  .route('/:userId')
  .patch(jwt({ secret: config.secret }), controller.patch);

export default router;
