import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const connectDB = uri => {
  mongoose
    .connect(uri, { dbName: 'chat' })
    .then(data => console.log(`Connected Successfully to ${data.connection.host}`))
    .catch(err => {
      throw err;
    });
};

const cookieOptions = {
  domain: 'localhost',
  path: '/',
  maxAge: 24 * 60 * 60 * 1000,
  sameSite: 'none',
  httpOnly: true,
  secure: true,
};

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  return res.status(code).cookie('auth-chat', token, cookieOptions).json({
    success: true,
    message,
  });
};

export { connectDB, sendToken, cookieOptions };
