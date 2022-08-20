const Task = require('../models/userTask');

module.exports.homePage = function(req, res){
    Task.find({}, function(err, task){
        if(err){
            console.log(`Couldnt perform read`);
        }
    });
    res.render('home',{title: "TODO App"});
};