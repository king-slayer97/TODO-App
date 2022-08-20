const Task = require('../models/userTask');
module.exports.deleteTask = function(req,res){
    console.log(`Inside delete controller`);
    // const {taskItem} = req.body;
    Task.deleteOne({ _id:req.body.taskItem},function(err,task){
        if(err){
            console.log(`first`)
        }
    });
    console.log(req.body);
    res.redirect('/');
};