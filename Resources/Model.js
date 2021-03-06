//Restaurant
{
	"id": Number,
	"name": String,
	"location": {
		"address": String
		"coordenates": [Number],
		"longitude": Number,
		"latitude": Number
	},
	"averagePrice": Number,
	"foursquare_url": String,
	"dishes": [Dish]
}
//Dish
{
	"id": Number,
	"name": String,
	"categories": [Category],
	"ingredients": [String] 
}
//Category
{
	"id": Number,
	"name": String,
	"type": String //Region, flavour, kind, occasion
}

//User
{
	"id": Number,
	"name": String,
	"lastname": String,
	"gender":Number,
	"birthdate":Date,
	"email": String,
	"password": String
}
//Rating
{
	"user": User,
	"item": Dish,
	"value": Float,
	"date": Date
}