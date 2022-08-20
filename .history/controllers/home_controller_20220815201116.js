const Task = require('../models/userTask');

module.exports.homePage = function(req, res){
    
    res.render('home',{title: "TODO App"});
};