const Task = require('../models/userTask');

module.exports.homePage = function(req, res){
    Task.find();
    res.render('home',{title: "TODO App"});
};