const mongoose = require('mongoose');
const config = require('config');

const mongoURi = config.get('MongoURI');

const db = async () => {
  try {
    await mongoose.connect(mongoURi, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('database connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = db;
