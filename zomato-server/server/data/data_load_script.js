import mongoose from 'mongoose';
import fs from 'fs';
import { parse } from 'csv-parse';
import { connectDB } from '../utils/helper.js';
import { Restaurants } from '../models/restaurantSchema.js';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const PATH = './zomato.csv';
const mongoURI = process.env.MONGO_URI;

connectDB(mongoURI);

const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));

const results = [];

const mapCsvRowToSchema = data => {
  return {
    Restaurant_ID: data[0],
    Restaurant_Name: data[1],
    Country_Code: data[2],
    City: data[3],
    Address: data[4],
    Locality: data[5],
    Locality_Verbose: data[6],
    Longitude: data[7],
    Latitude: data[8],
    Cuisines: data[9],
    Average_Cost_for_two: data[10],
    Currency: data[11],
    Has_Table_booking: data[12],
    Has_Online_delivery: data[13],
    Is_delivering_now: data[14],
    Switch_to_order_menu: data[15],
    Price_range: data[16],
    Aggregate_rating: data[17],
    Rating_color: data[18],
    Rating_text: data[19],
    Votes: data[20],
  };
};

fs.createReadStream(PATH)
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', data => {
    results.push(mapCsvRowToSchema(data));
  })
  .on('end', () => {
    Restaurants.insertMany(results)
      .then(() => {
        console.log('Data successfully loaded into MongoDB');
        mongoose.connection.close();
      })
      .catch(err => {
        console.error('Error loading data into MongoDB:', err);
        mongoose.connection.close();
      });
  });
