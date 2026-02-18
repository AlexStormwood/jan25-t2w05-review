// The bare minimum to run an express server 

// PORT is handy for running our server 
// when we get to that part of our code!
const PORT = 3000;

// Import Express so we can start using it
const express = require("express");

// Initialise an Express app
// This is the bit we can customise and configure
const app = express();

// Do app configuration BEFORE any routes!!
// Otherwise some routes won't have your fancy configuration!!!

// Enable all routes to receive JSON body data on requests
app.use(express.json());
// request.body.blahblahblah now works!



// Between "app = express();" and "app.listen()",
// we have to do our configuration and
// mount any routes we want our server to respond to!

// localhost:3000/
// serverInstance.verb(path, function)
app.get("/", (request, response) => {
	response.json({
		message:"Hello world!"
	});
});


// serverInstance.verb(path, function)
// localhost:3000/repeater
app.post("/repeater", (request, response) => {

	// 1. pull data from the incoming request
	// request - has properties 
	// body - undefined 
	// customMessageToRepeat - string 

	let messageToRepeat = request.body.customMessageToRepeat;

	// 2. do the logic/functionality of the route 
	// to create our expected result
	let result = messageToRepeat + messageToRepeat + messageToRepeat;

	// 3. send the result back as a response
	// for the frontend or human or other API to read and receive
	response.json({
		// message:"Not yet implemented!"
		message: result
	});
});



//#region Message controller routes 
// localhost:3000/messages


// GET localhost:3000/messages/
app.get("/messages/", (request, response) => {
	response.json({
		message:"Message GET route activated!!!"
	});
});

// POST localhost:3000/messages/
app.post("/messages/", (request, response) => {
	response.json({
		message:"Message POST route activated!!!"
	});
});

// PATCH localhost:3000/messages/
app.patch("/messages/", (request, response) => {
	response.json({
		message:"Message PATCH route activated!!!"
	});
});

// DELETE localhost:3000/messages
app.delete("/messages/", (request, response) => {
	response.json({
		message:"Message DELETE route activated!!!"
	});
});





//#endregion

















// Activate the server so that it can start
// listening for incoming web traffic
// KEEP THIS COMMENTED OUT!
// Server configuration file should NOT 
// run the server within this file!!!!
// app.listen(PORT, () => {
// 	console.log("Server has started on port " + PORT);
// });

// Export the server to reuse it in other files
// e.g. automated unit testing 
module.exports = {
	app
}