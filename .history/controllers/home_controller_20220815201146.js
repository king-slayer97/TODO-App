const Task = require('../models/userTask');

module.exports.homePage = function(req, res){
    Task.find({}, function(err, task){
        if(err){
            console.log(first)
        }
    });
    res.render('home',{title: "TODO App"});
};