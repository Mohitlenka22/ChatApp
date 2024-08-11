import jwt from 'jsonwebtoken';
import { ErrorHandler } from '../utils/utility.js';

const isAuthenticated = (req, res, next) => {
  const token = req.cookies['auth-chat'];

  if (!token) return next(new ErrorHandler('Please login to access ', 401));

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decodedData._id;

  next();
};

export { isAuthenticated };
