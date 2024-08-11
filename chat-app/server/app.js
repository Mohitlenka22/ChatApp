import express from 'express';
import { connectDB } from './utils/features.js';
import dotenv from 'dotenv';
import { errorMiddleware } from './middlewares/error.js';
import cookieParser from 'cookie-parser';
import UserRouter from './routes/user.routes.js';
import ChatRouter from './routes/chat.routes.js';

dotenv.config({
  path: './.env',
});

const app = express();
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

connectDB(mongoURI);

// middlewares
app.use(cookieParser());
app.use(express.json());

// user routes
app.use('/user', UserRouter);
app.use('/chat', ChatRouter);

// backend root endpoint
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`successfully started on http://localhost:${3000}`);
});
