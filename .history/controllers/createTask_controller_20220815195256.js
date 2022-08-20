const Task = require('../models/userTask');
module.exports.createTask = function(req, res){
    console.log(req.body);
    Task.create(req.body,(err,task)=>{
        if(err){
            console.log();
        }
    });
    res.redirect('back');
};