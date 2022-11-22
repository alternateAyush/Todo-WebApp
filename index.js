const express = require('express');
const port = 8000;
const app = express();
// const bodyParser = require("body-parser");

const db = require('./config/mongoose');

app.use(express.static('./assets'));
app.use("/",require("./routes"));
app.set("view engine","ejs");
app.set("views","./views");
// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port,function(err){
    if(err)
    {
        console.log(`Error: ${err}`);
    }
    else{
        console.log(`Success: Server up and running on port ${port}`)
    }
})