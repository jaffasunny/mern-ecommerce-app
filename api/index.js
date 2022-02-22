const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

mongoose
	.connect(
		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lfts2.mongodb.net/shop?retryWrites=true&w=majority`
	)
	.then(() => console.log("DB Connection success"))
	.catch((err) => console.log(err));

app.listen(5000, () => {
	console.log("Backend server is running");
});
