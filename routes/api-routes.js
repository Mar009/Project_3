// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Route for logging in
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      nickname: req.body.nickname
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.status(401).json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });


  //this function loads the list of new symptoms
  app.get("/api/new-symptom", function(req,res){
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.status(401).json({});
    } else {
      axios.get("https://api.nutridigm.com/api/v1/nutridigm/healthconditions?subscriptionId=200a4593b9277ce9ffb162e74cb71ea0&api_key=200a4593b9277ce9ffb162e74cb71ea0").then(response => {
        res.json(response.data)
      })
    }
  });
  //this function will give the user a list of remedy types
  app.get("/api/food-groups", function(req,res){
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.status(401).json({});
    } else {
      axios.get("https://api.nutridigm.com/api/v1/nutridigm/foodgroups?subscriptionId=200a4593b9277ce9ffb162e74cb71ea0").then(response => {
        res.json(response.data)
      })
    }
  });
  
  //this will allow a user to match a symptom to a remedy type
  // app.get("/api/get-remedy", function(req,res){
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.status(401).json({});
  //   } else {
  //     axios.get("https://api.nutridigm.com/api/v1/nutridigm/suggest?subscriptionId=200a4593b9277ce9ffb162e74cb71ea0&problemId="+problemID+"&fg2="+fgID).then(response => {
  //       res.json(response.data)
  //     })
  //   }
  // })
  
};

  app.post("/api/symptom_data", function(req, res) {
    db.Symptom.create({
      name: req.body.name,
      locale: req.body.locale,
      UserId: req.body.UserId,
      time: req.body.time,
      id: req.body.id
      
    })
      .then(function() {
        res.status(200).send('success!');
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  })

  app.get("/api/symptom_data", function(req, res) {
      db.Symptom.findAll({
        name: req.params.name,
        date: req.params.createdAt
      })
      .then(result => res.json(result));
  })
}

