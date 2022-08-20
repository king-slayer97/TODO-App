const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        unique:true,
        required:true
    },
    category:{
        
    }
});