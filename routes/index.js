const express=require('express');
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
const indexController = require("../controllers/index_controller");
const createTodoController = require("../controllers/createTodo_controller");
const deleteTodoController = require("../controllers/deleteTodo_controller");
const completeTodoController = require("../controllers/completeTodo_controller");


router.get("/",indexController.index);
router.post("/create-todo",createTodoController.createTodo);
router.post("/complete-todo",completeTodoController.completeTodo);
router.post("/delete-todo",deleteTodoController.deleteTodo);
module.exports = router;