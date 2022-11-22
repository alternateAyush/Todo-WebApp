const Todos = require('../models/todos');


module.exports.index = function(req,res){
    Todos.find({},function(err,todos){
        if(err)
        {
            console.log("ERROR: error in fetching todos from db");
            return;
        }
        else{
            return res.render('index',{
                title:"TODO App",
                todos:todos,
            });
        }
    })
}