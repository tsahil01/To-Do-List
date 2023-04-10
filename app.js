const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const date = require(__dirname + '/date.js');

let items = [];
let workItems = [];

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); // to use css and other things

app.set('view engine', 'ejs');  // telling our app to use ejs.

app.get("/",function(req,res){

    // let day = date.getDay();
    const day = date.getDate();

    res.render('list', { listTitle: day, newListItems:items});  // We can only have one res.render();

    app.post("/",function(req,res){
        let item = req.body.nextItem;
        if (req.body.listName === "Work-List"){
            workItems.push(item);
            res.redirect("/work");
        }
        else{

            items.push(item);
            res.redirect("/");   
        }
    });
});

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work-List", newListItems:workItems})
})

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000, function(){console.log("Running at port 3000")});