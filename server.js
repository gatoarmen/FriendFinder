// Dependencies
// =============================================================
var express = require('express')
var bodyParser = require("body-parser");
var path = require("path");

// Setup server 
// =============================================================
var app = express()
var PORT =  process.env.PORT || 8080;


//HTML ROUTES

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);



//Create new customers, post information into new route
app.post("/api/friends", function(req, res){


})


//Listen for PORT 
app.listen(PORT, function(){
   console.log('App listening on PORT ' + PORT)
})