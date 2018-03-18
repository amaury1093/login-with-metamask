import express from 'express';

import * as controller from './controller';

const router = express.Router();

/** GET /api/users */
router.route('/').get(controller.find);

/** GET /api/users/:userId */
router.route('/:userId').get(controller.get);

/** POST /api/users */
router.route('/').post(controller.create);

export default router;
