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

    // Receive user details scores
    let user = req.body
    let userScores = req.body.scores;
    let friend = 0;


    //Post Method Variables
    //Array of numbers
    let Array1 = friendsData[0].scores;
    let Array2 = friendsData[1].scores;
    let Array3 = friendsData[2].scores;
    let ArrayFour = userScores;
    console.log(ArrayFour);
    console.log(Array1);

    // Empty arrays to pass in Differences
    let totalOne = [];
    let totalTwo = [];
    let totalThree = [];
    //This loop is used to subtract each array elements,
    //Comparing User Data with Friends
    console.log(totalOne);

    for (var i = 0; i < ArrayFour.length; i++) {
      //Use the absolute value of the differences,
      //Of each array element
      ArrayFour[i] = parseInt(ArrayFour[i]);
      totalOne.push(Math.abs(ArrayFour[i] - Array1[i]));
      totalTwo.push(Math.abs(ArrayFour[i] - Array2[i]));
      totalThree.push(Math.abs(ArrayFour[i]- Array3[i]));
    };
    console.log(ArrayFour);
    console.log(Array1);

    console.log(totalOne);
    console.log(totalTwo);
    console.log(totalThree);
    //Function to sum
    function sumArray(total, num) {
      return total + num;
    };
    // Get the sum of totals to get the "Total Difference"
    totalOne = totalOne.reduce(sumArray);
    totalOne = parseInt(totalOne);
    totalTwo = totalTwo.reduce(sumArray);
    totalThree = totalThree.reduce(sumArray);
    console.log(totalOne);
    console.log(totalTwo);
    console.log(totalThree);

    //If statements to compare Total differences 
    //And get the least amount of diffence. 
    if (totalOne < totalTwo && totalOne < totalThree) {
      //console.log("Floyd Money MEweather!")
      // send back to browser the best friend match
      res.json(friendsData[0])
      console.log("0")
    } else if (totalTwo < totalThree && totalTwo < totalOne) {
      //console.log("Iron MIKE!");
      // send back to browser the best friend match
      res.json(friendsData[1])
      console.log("1")
    } else if (totalThree < totalTwo && totalThree < totalOne){
      //console.log("Jc Chavez the best!");
      // send back to browser the best friend match
      res.json(friendsData[2])
      console.log("2")
    };
    // // Push to User and Friends the data as JSON
    userData.push(user);
    friendsData.push(user);
  });
};