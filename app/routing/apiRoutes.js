// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

let friendsData = require("../data/friends");;
let userData = require("../data/user");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    //A GET route with the url `/api/friends`. 
    //This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    //A POST routes `/api/friends`. 
    //This will be used to handle incoming survey results. 
    //This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req, res) {

        

        // Receive user details (name, photo, scores)
        var user = req.body;
    
    
        // after finding match, add user to friend array
        console.log(req.body);
        console.log(req.body.scores);
        userData.push(req.body);
        friendsData.push(req.body);    
        // send back to browser the best friend match
        res.json(friendsData[bestFriendIndex]);

    });

    

}