const Task = require('../models/userTask');
module.exports.deleteTask = function(req,res){
    console.log(`Inside delete controller`);
    const {} = console.log(req.body);
    res.redirect('/');
};