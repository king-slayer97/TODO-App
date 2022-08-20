const Task = require('../models/userTask');
module.exports.deleteTask = function(req,res){
    console.log(`Inside del`);
    console.log(req.body);
    res.redirect('/');
};