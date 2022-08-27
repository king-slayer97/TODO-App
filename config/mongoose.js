const mongoose = require("mongoose");
// require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ey0mu.mongodb.net/${process.env.DB_NAME}`
);

const db = mongoose.connection;

db.on("error", function (err) {
  console.log(`Error in DB connection: ${err}`);
});

db.once("open", () => {
  console.log(`Connected to Mongo DB`);
});

module.exports = db;
