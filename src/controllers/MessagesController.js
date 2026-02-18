// This file will organise a bunch of Message-related routes
// all in one place 

// Import Express to start using its system for organising routes
const express = require("express");
// Initialise a new router for our routes to be attached to!
const router = express.Router();

// app.get(path, function);
// router.get(path, function);




//#region Message controller routes 
// localhost:3000/messages


// GET localhost:3000/messages/
// GET localhost:3000/messages/
router.get("/", (request, response) => {
	response.json({
		message:"Message GET route activated!!!"
	});
});

// POST localhost:3000/messages/
router.post("/", (request, response) => {
	response.json({
		message:"Message POST route activated!!!"
	});
});

// PATCH localhost:3000/messages/
router.patch("/:messageId", (request, response) => {
	response.json({
		message:"Message PATCH route activated!!!",
		data: request.params.messageId
	});
});

// DELETE localhost:3000/messages
router.delete("/:messageId", (request, response) => {
	response.json({
		message:"Message DELETE route activated!!!"
	});
});





//#endregion



// module.exports = router;
module.exports = {
	messagesRouter: router
}