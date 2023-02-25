
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

var jsonParser = bodyParser.json();


app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: false, 
  })
);



app.get("/",(req,res)=>{
    res.render("student_form")
})

app.listen(PORT,()=>{
    console.log("Listenning at",PORT);
})