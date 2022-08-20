const Task = require('../models/userTask');
module.exports.createTask = function(req, res){
    console.log(req.body);
    
    res.redirect('back');
};