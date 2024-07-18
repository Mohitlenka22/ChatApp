import express from 'express';
import { getRestaurantById, getAllRestaurants, searchRestaurants } from '../controllers/restaurant.controllers.js';

const restaurantRouter = express.Router();

restaurantRouter.get('/getOne/:restaurantId', getRestaurantById);
restaurantRouter.get('/all', getAllRestaurants);
restaurantRouter.get('/search', searchRestaurants);

export { restaurantRouter };
