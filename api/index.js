const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("DB Connection success"))
	.catch((err) => console.log(err));

app.listen(5000, () => {
	console.log("Backend server is running");
});
