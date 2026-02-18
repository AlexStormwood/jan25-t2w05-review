// The bare minimum to run an express server 

// PORT is handy for running our server 
// when we get to that part of our code!
const PORT = 3000;

// Import Express so we can start using it
const express = require("express");

// Initialise an Express app
// This is the bit we can customise and configure
const app = express();

// Between "app = express();" and "app.listen()",
// we have to do our configuration and
// mount any routes we want our server to respond to!

app.get("/", (request, response) => {
	response.json({
		message:"Hello world!"
	});
});

// Activate the server so that it can start
// listening for incoming web traffic
app.listen(PORT, () => {
	console.log("Server has started on port " + PORT);
});

// Export the server to reuse it in other files
// e.g. automated unit testing 
module.exports = {
	app
}