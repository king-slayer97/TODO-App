const Task = require('../models/')
module.exports.homePage = function(req, res){
    res.render('home',{title: "TODO App"});
};