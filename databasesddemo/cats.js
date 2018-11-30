 var mongoose = require("mongoose");
 mongoose.connect("mongodb://localhost/cat_app");

 var catSchema = new mongoose.Schema({
 	name: String,
    age: Number,
    temperament: String
 });

 var Cat = mongoose.model("cat", catSchema);

 // var george = new Cat({
 // 	name: "George",
 // 	age:11,
 // 	temperment: "Grouchy"
 // });

 // george.save(function(err, cat){
 // 	if(err){
 // 		console.log("somthing went wrong")
 // 	} else{
 // 		console.log("we just added cat to database")
 // 		console.log(cat);
 // 	}
 // });

Cat.create({
	name:"Snow White",
	age: 15,
	temperament: "BLand"
}, function(err, cat){
	if(err){
		console.log(err);

	} else {
		console.log(cat);
	}
}
   
);

//retrive info

Cat.find({}, function(err, cats){
	if(err){
		console.log("oh no error")
		console.log(err);
	}else{
		console.log("all the cats");
		console.log(cats);
	}
});




