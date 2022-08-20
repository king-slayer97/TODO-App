const Task = require('../models/userTask');
module.exports.deleteTask = function(req,res){
    console.log(`object`)
    console.log(req.body);
    res.redirect('/');
};