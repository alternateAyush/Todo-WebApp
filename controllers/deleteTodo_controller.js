const Todos = require("../models/todos");

// delete todo
module.exports.deleteTodo = function (req, res) {
  var arr = Object.values(req.body);
  if(arr.length==0)
  {
    return res.redirect('back');
  }
  Todos.deleteMany({
    _id: {
      $in: arr,
    },
  },function(err,result){
    if(err)
    {
        console.log("ERROR in deleting from db", err);
        return;
    }
    else
    {
        console.log(result);
        return res.redirect("back");
    }
  });  
};
