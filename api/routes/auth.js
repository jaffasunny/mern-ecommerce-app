const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

// REGISTER
router.post("/register", async (req, res) => {
	const newUser = new User({
		username: req.body.username,

		// Encrypting using CryptoJS
		email: req.body.email,
		password: CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC
		).toString(),
	});

	try {
		// This will save to our db
		const savedUser = await newUser.save();

		// 200 successfull and 201 successfully added
		res.status(201).json(savedUser);
	} catch (err) {
		// for any error 500 will be used
		res.status(500).json(err);
	}
});

// LOGIN
router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		!user && res.status(401).json("Wrong credentials!");

		const hashedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.PASS_SEC
		);
		const password = hashedPassword.toString(CryptoJS.enc.Utf8);

		password !== req.body.password &&
			res.status(401).json("Wrong credentials!");

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
