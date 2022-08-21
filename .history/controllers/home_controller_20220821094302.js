const Task = require('../models/userTask');

module.exports.homePage = function(req, res){
    //Reading the tasks list from
    Task.find({}, function(err, taskList){
        if(err){
            console.log(`Couldnt perform read operation. Please try again!`);
        }
        else{
            // console.log(taskList);
            res.render('home',{title: "Task Tracker",tasks:taskList});
        }
    });
};