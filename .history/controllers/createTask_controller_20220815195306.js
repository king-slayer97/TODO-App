const Task = require('../models/userTask');
module.exports.createTask = function(req, res){
    console.log(req.body);
    Task.create(req.body,(err,task)=>{
        if(err){
            console.log(`Error in adding task `);
        }
    });
    res.redirect('back');
};