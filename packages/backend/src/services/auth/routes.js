import express from 'express';

import * as controller from './controller';

const router = express.Router();

/** POST /api/auth */
router.route('/').post(controller.create);

export default router;
