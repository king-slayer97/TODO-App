const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task-list');

const db = mongoose.connection;

db.on('error', function (err) {
    console.log(`Error in DB connection: ${err}`);
});

db.once('open', ()=>{
    console.log(object)
});