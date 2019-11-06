// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

let path = require("path");


module.exports = function(app) {
//A default, catch-all route that leads to `home.html` 
//Which displays the home page.

// If no matching route is found default to home
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
//A GET Route to `/survey` which should display the survey page.

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });


};