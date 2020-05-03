// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const bookSchema = new Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	categories: { type: String, required: true },
	descpription: { type: String, required: true },
	publish: { type: String, required: true },
	preview: { type: String, required: true },
	link: { type: String, required: true },
	image: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

//Setting schema to variable
const Book = mongoose.model("Book", bookSchema);

//Exporting
module.exports = Book;
