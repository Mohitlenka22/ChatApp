import express from 'express';
import { getMyProfile, login, logout, register, searchUser } from '../controllers/user.controllers.js';
import { singleAvatar } from '../middlewares/multer.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', singleAvatar, register);
router.post('/login', login);


// protected routes
router.use(isAuthenticated); // just use once

router.get('/me', getMyProfile);
router.get('/logout', logout);
router.get('/search', searchUser);

export default router;
