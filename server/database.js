var mongoose = require('mongoose');
var Car = require('./models/Car.js');
mongoose.connect('mongodb://localhost/carDealer', function(){
	console.log("connected.");

	mongoose.connection.db.dropDatabase();
	var cars = [
    { brand: "Mitsubishi",
      model: "Montero"
    },
    {
      brand: "Toyota",
      model: "Hilux"
    },{
      brand: "Ford",
      model: "Explorer",
      purchased: true 
    },{
      brand: "Isuzu",
      model: "D-Max",
    }
    ];

    cars.forEach(function(car){
       new Car(car).save();
    });
})
