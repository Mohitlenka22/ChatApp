import mongoose from 'mongoose';

const connectDB = mongoURI => {
  mongoose
    .connect(mongoURI, {
      dbName: 'zomato',
    })
    .then(data => console.log(`Connected to ${data.connection.host}`))
    .catch(err => console.log(err));
};

export { connectDB };
