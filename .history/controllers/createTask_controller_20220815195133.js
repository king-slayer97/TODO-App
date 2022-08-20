const Task
module.exports.createTask = function(req, res){
    console.log(req.body);
    res.redirect('back');
};