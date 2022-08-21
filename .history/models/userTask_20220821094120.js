const mongoose = require('mongoose');

//Creating the Schema
const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        unique:true,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    due_date:{
        type:String
    }
});

// Creating model from schema
const Task = mongoose.model('Task',taskSchema);

module.exports = Task;