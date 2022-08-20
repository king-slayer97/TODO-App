const Task = require('../models/userTask');
module.exports.deleteTask = function(req,res){
    console.log(`I`)
    console.log(req.body);
    res.redirect('/');
};