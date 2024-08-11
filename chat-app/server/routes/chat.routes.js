import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

// protected routes
router.use(isAuthenticated); // just use once

export default router;
