const mongoose = require('mongoose');

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
        type:
    }
});