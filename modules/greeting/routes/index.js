import express from 'express';
import getName from '../controllers/getName.js';
const router1 = express.Router();

router1.get('/', getName);

export default router1;
