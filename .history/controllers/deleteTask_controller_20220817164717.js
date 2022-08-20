const Task = require('../models/userTask');
module.exports.deleteTask = function(req,res){
    console.log(`Inside delete controller`);
    // const {taskItem} = req.body;
    Task.deleteMany({ _id:req.body.taskItem},function(err,task){
        if(err){
            console.log(`Error encountered`);
        }
        else{
            console.log(`Deleted successfully`);
        }
    });
    // console.log(req.body);
    res.redirect('/');
};