// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = function(app) {
  app.use(function(req, res) {
      res.sendFile(path.join(__dirname, "../client/build/index.html"))
  })
};
