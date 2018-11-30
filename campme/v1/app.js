var express = require("express");
var app =express();
const port = 3000
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","ejs")

var campgrounds = [
        {name:"himalay", image :"https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201__340.jpg"},
        {name:"kerala", image :"https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402__340.jpg"},
         {name:"jiapur", image :"https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092__340.jpg"},


    ];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
    

    res.render("campgrounds",{campgrounds:campgrounds}); 
});

app.post("/campgrounds", function(req, res){
	// get data array and add
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");

     
});

app.get("/campgrounds/new", function(req, res){
	res.render("new");
})
app.listen(port, function(){
	console.log("the yelpcamp server has started");
});
