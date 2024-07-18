import { Restaurants } from '../models/restaurantSchema.js';

const getRestaurantById = async (req, res) => {
  const { restaurantId } = req.params;

  if (!restaurantId) {
    return res.status(400).json({ message: 'please provide restaurant id' });
  }

  const restaurant = await Restaurants.findOne({ Restaurant_ID: restaurantId });
  return res.status(200).json({ data: restaurant });
};

const getAllRestaurants = async (req, res) => {
  const Country_Code = req.query.countryCode;
  const price = req.query.price;
  const page = req.query.page;
  const limit = req.query.limit;
  const documents = await Restaurants.find({ Country_Code, Average_Cost_for_two: price });
  const restaurants = await Restaurants.getPaginatedRestaurants(page, limit, Country_Code, price, null);
  return res.status(200).json({ restaurants: restaurants, documents: documents.length });
};

const searchRestaurants = async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const searchQuery = req.query.searchQuery;
  const query = {
    $or: [{ Restaurant_Name: new RegExp(searchQuery, 'i') }, { Cuisines: new RegExp(searchQuery, 'i') }],
  };
  const documents = await Restaurants.find(query);
  const filteredRestuarants = await Restaurants.getPaginatedRestaurants(page, limit, null, null, query);

  if (!filteredRestuarants) {
    return res.status(404).json({ message: 'No Restaurants Found' });
  }
  // console.log(filteredRestuarants.length);
  return res.status(200).json({ content: filteredRestuarants, documents: documents.length });
};

export { getRestaurantById, getAllRestaurants, searchRestaurants };
