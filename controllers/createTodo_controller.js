
const Todos = require('../models/todos');


module.exports.createTodo = function(req,res){
    Todos.create({
        task: req.body.task,
        deadline: req.body.deadline,
        category: req.body.category,
    },function(err,newTodo){
        if(err)
        {
            console.log("ERROR: Inserting in db");
            return;
        }
        return res.redirect('back');
    });
}