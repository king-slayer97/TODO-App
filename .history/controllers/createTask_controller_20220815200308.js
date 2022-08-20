const Task = require('../models/userTask');
module.exports.createTask = function(req, res){
    console.log(req.body);
    Task.create(req.body,(err,task)=>{
        if(err){
            console.log(`Error in adding task ${err}`);
        }
        else{
            console.log(`Task successfully added in DB`);
            console.log(task);
        }
    });
    res.render('home',{
        tas
    });
};