const Task = require('../models/userTask');
module.exports.createTask = function(req, res){
    console.log(req.body);
    Task.create(req.body,(err,task)=>{
        
    });
    res.redirect('back');
};