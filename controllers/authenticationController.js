var User     = require('../models/user');
var jwt      = require('jsonwebtoken');
var passport = require('passport');
var secret   = require('../config/config').secret;

function signup(req, res, next) {
  passport.authenticate('local-signup', function(err, user, info) {
    if (err) return res.status(500).send(err, info);
    if (!user) return res.status(401).send({ error: 'User already exists!' });

    var token = jwt.sign(user, secret, { expiresInMinutes: 1440 });

    return res.status(200).send({ 
      success: true,
      message: "Welcome budding author.",
      token: token
    });
  })(req, res, next);
};

function login(req, res, next) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) return res.status(500).send(err);

    if (!user) return res.status(401).send({ message: 'No user with that name exists here.' });

    if (!user.validPassword(req.body.password)) return res.status(401).send({ message: 'Authentication failed. Wrong password.' });

    var token = jwt.sign(user, secret, { expiresInMinutes: 1440 });

    return res.status(200).send({
      success: true,
      message: 'Get your writing boots on.',
      token: token,
      user: user
    });
  });
};

function linkedInLogin(req, res, next){  
  console.log("about to login to linkedin");

 passport.authenticate('linkedin', { state: 'true' }),
 function(req, res){
   // The request will be redirected to Linkedin for authentication, so this
   // function will not be called.
 };
}

function linkedInLoginCallback(){
  console.log("linkedinCallback");  
}


module.exports = {
  signup: signup,
  login: login,
  linkedInLogin: linkedInLogin,
  linkedInLoginCallback: linkedInLoginCallback
}