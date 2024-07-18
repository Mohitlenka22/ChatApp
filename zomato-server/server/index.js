import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './utils/helper.js';
import { restaurantRouter } from './routes/restaurant.routes.js';
import cors from 'cors';

dotenv.config({ path: './.env' });

// constants
const app = express();
const PORT = process.env.PORT || 3000;

// database connection
const mongoURI = process.env.MONGO_URI;
connectDB(mongoURI);

// middlewares
app.use(
  cors({
    origin: 'http://localhost:3001',
  })
);
app.use(express.json());
app.use('/restaurant', restaurantRouter);

// routes
app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.listen(PORT, () => console.log(`successfully started server on http://localhost:${PORT}`));
