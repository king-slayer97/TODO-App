const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:<password>@cluster0.ey0mu.mongodb.net/test');

const db = mongoose.connection;

db.on('error', function (err) {
    console.log(`Error in DB connection: ${err}`);
});

db.once('open', ()=>{
    console.log(`Connected to Mongo DB`);
});