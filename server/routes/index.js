import express from 'express';
import * as controller from '../controllers/index.js'

const router = express.Router();

router.post('/recognition', controller.recognition)

export default router;