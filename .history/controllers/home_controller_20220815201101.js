const Task = require('../')
module.exports.homePage = function(req, res){
    res.render('home',{title: "TODO App"});
};