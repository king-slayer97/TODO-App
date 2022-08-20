const Task = require('../models/userTask');
module.exports.deleteTask = function(req,res){
    console.log(`Inside delete controller`);
    // const {taskItem} = req.body;
    Task.deleteOne({ _id:req.body})
    console.log(req.body);
    res.redirect('/');
};