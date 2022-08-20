const Task = require('../models/userTask');

module.exports.homePage = function(req, res){
    Task.find({}, function(err, task){
        if(e)
    });
    res.render('home',{title: "TODO App"});
};