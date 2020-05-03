// Dependencies
const mongoose = require("mongoose");
const db = require("./../../../models");

//This file empties the Items & Users collections and inserts the items & users below

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/mern_bookdb",
	{ useNewUrlParser: true }
);

const bookSeed = [
	{
		title: "Dune",
		author: "Frank Herbert",
		category: "Sci Fi",
		description: "Some Bullshit",
		published: "2005",
		link: "Some link",
		preview: "another link",
		thumbnail: "Some image",
		date: new Date(Date.now()),
	},
	{
		title: "Dune 2",
		author: "Frank Herbert",
		category: "Frank Herbert",
		description: "Some more Bullshit",
		published: "1968",
		link: "Some damn link",
		preview: "another damn link",
		thumbnail: "Some damn image",
		date: new Date(Date.now()),
	},
];

db.Book.remove({})
	.then(() => db.Book.collection.insertMany(bookSeed))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
