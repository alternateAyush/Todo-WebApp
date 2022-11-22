const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Todos = mongoose.model("Todos", todoSchema);
module.exports = Todos;
