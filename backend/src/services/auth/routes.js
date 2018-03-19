import express from 'express';

import * as controller from './controller';

const router = express.Router();

/** POST /api/users */
router.route('/').post(controller.create);

export default router;
