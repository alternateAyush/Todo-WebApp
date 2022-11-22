const Todos = require("../models/todos");

module.exports.completeTodo = function (req, res) {
  var arr = Object.values(req.body);
  console.log(arr);
  Todos.updateMany(
    {},
    { $set: { complete: false } },
    { multi: true },
    function (err, records) {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
  Todos.updateMany(
    { _id: { $in: arr } },
    { $set: { complete: true } },
    { multi: true },
    function (err, records) {
      if (err) {
        console.log(err);
        return;
      } else {
        return res.redirect("back");
      }
    }
  );
};
