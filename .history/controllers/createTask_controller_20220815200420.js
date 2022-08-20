const Task = require('../models/userTask');
module.exports.createTask = function(req, res){
    console.log(req.body);
    Task.create(req.body,(err,task)=>{
        if(err){
            console.log(`Error in adding task ${err}`);
            return res.re
        }
        else{
            console.log(`Task successfully added in DB`);
            console.log(task);
            return res.render('home',{
                task:task
            });
        }
    });
};