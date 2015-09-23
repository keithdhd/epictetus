(function(){
  angular
  .module('Epictetus')
  .controller('UsersController', UsersController)

  UsersController.$inject = ['User','TokenService', 'APP_NAME', '$location'];

  function UsersController(User, TokenService, APP_NAME, $location) {
    var self = this;

    self.all              = [];
    self.user             = {};
    self.APP_NAME         = APP_NAME; 

  // Function to display the message back to the User
  function showMessage(res) {
    var token = res.token ? res.token : null;
    
    // Console.log our response from the API
    // Set local user
    if(token) { console.log(res); self.user=res.user; }
    self.message =  res.message ? res.message : null;
    $location.path("/today");
  }

  self.authorize = function() {
    User.authorize(self.user, showMessage);
  }

  self.join = function() {
    User.join(self.user, showMessage);
  }

  self.logout = function() {
    TokenService.removeToken && TokenService.removeToken();
    self.user = {};
    self.message = null;
    $location.path("/login");
  }

  self.isLoggedIn = function() {
    return TokenService.isLoggedIn ? TokenService.isLoggedIn() : false;
  }

  self.getTwitterData = function(){
    TwitterFactory.getData(self.user.twitterHandle, setTwitterData);
  }

  function setTwitterData(twitterData){
    self.user.twitterData = twitterData;
    console.log(twitterData);
  }

  // Load user only if you are logged in!
  if (self.isLoggedIn()) {
    self.user = TokenService.parseJwt();
  }

  return self;
};
})();