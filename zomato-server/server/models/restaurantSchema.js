import { Schema, model } from 'mongoose';

const restaurantSchema = new Schema({
  Restaurant_ID: {
    type: String,
    default: 0,
  },
  Restaurant_Name: {
    type: String,
    default: 'Unknown',
  },
  Country_Code: {
    type: Number,
    default: 0,
  },
  City: {
    type: String,
    default: 'Unknown',
  },
  Address: {
    type: String,
    default: 'Unknown',
  },
  Locality: {
    type: String,
    default: 'Unknown',
  },
  Locality_Verbose: {
    type: String,
    default: 'Unknown',
  },
  Longitude: {
    type: String,
    default: 0.0,
  },
  Latitude: {
    type: String,
    default: 0.0,
  },
  Cuisines: {
    type: String,
    default: 'Unknown',
  },
  Average_Cost_for_two: {
    type: Number,
    default: 0,
  },
  Currency: {
    type: String,
    default: 'INR',
  },
  Has_Table_booking: {
    type: String,
    default: 'No',
  },
  Has_Online_delivery: {
    type: String,
    default: 'No',
  },
  Is_delivering_now: {
    type: String,
    default: 'No',
  },
  Switch_to_order_menu: {
    type: String,
    default: 'No',
  },
  Price_range: {
    type: Number,
    default: 1,
  },
  Aggregate_rating: {
    type: Number,
    default: 0,
  },
  Rating_color: {
    type: String,
    default: 'Unknown',
  },
  Rating_text: {
    type: String,
    default: 'Not rated',
  },
  Votes: {
    type: String,
    default: 0,
  },
});

restaurantSchema.statics.getPaginatedRestaurants = function (page, limit, Country_Code, price, query) {
  const resultsPerPage = 12;
  if (!limit) {
    limit = restaurantSchema;
  }
  if (!Country_Code) {
    Country_Code = 1;
  }
  if (!price) {
    price = 0;
  }
  if (!query) {
    return this.find({ Country_Code, Average_Cost_for_two: { $gte: price } })
      .lean()
      .skip(page * resultsPerPage)
      .limit(limit);
  }
  return this.find(query)
    .lean()
    .skip(page * resultsPerPage)
    .limit(limit);
};

export const Restaurants = model('Restaurants', restaurantSchema);
