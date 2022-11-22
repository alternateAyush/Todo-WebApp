const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/todo_development");

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error in db connection"));

db.once('open',function(){
    console.log('db connection successfull');
})

module.exports=db;
