const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRoute = require("./routes/user");

require("dotenv").config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("DB Connection success"))
	.catch((err) => console.log(err));

app.use(express.json());

app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log("Backend server is running");
});
