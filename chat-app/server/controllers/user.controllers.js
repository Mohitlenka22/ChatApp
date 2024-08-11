import { compare } from 'bcrypt';
import { User } from '../models/userSchema.js';
import { sendToken, cookieOptions } from '../utils/features.js';
import { TryCatch } from '../middlewares/error.js';
import { ErrorHandler } from '../utils/utility.js';

const register = TryCatch(async (req, res, next) => {
  const { name, username, password } = req.body;

  const avatar = {
    public_id: 'ddcs',
    url: 'dcsc',
  };

  const user = await User.create({
    name,
    username,
    password,
    avatar,
  });

  sendToken(res, user, 201, 'User created successfully');
});

const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username }).select('+password');

  if (!user) return next(new ErrorHandler('Invalid username', 404));

  const isMatch = await compare(password, user.password);

  if (!isMatch) return next(new ErrorHandler('Invalid password', 404));

  sendToken(res, user, 200, `Welcome, Back ${user.name}`);
});

const getMyProfile = TryCatch(async (req, res, next) => {
  const user = await User.findById(req.user);

  return res.status(200).json({
    success: true,
    user,
  });
});

const logout = TryCatch(async (req, res, next) => {
  return res
    .status(200)
    .clearCookie('auth-chat', { ...cookieOptions, maxAge: 0 })
    .json({
      success: true,
      message: 'logged out successfully',
    });
});

const searchUser = TryCatch(async (req, res) => {
  const { name } = req.query;
  return res.status(200).json({
    success: true,
    message: name,
  });
});

export { login, register, getMyProfile, logout, searchUser };
