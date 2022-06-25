const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = () => {
  try {
    mongoose.connect(process.env.MONGO_URL, () => {
      console.log(
        `MongoDB is ${mongoose.STATES[mongoose.connection.readyState]}`
      );
    });
  } catch (error) {
    console.log({ msg: error.message });
  }
};

module.exports = connectDatabase;
