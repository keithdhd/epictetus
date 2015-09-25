(function(){
  angular
  .module('Epictetus')
  .controller('UsersController', UsersController)

  UsersController.$inject = ['User','TokenService', 'APP_NAME', '$location', 'Chart', '$window'];

  function UsersController(User, TokenService, APP_NAME, $location, Chart, $window) {
    var self = this;

    self.all              = [];
    self.user             = {};
    self.APP_NAME         = APP_NAME; 

  // Function to display the message back to the User
  function processUserData(res) {
    var token = res.token ? res.token : null;
    
    // Console.log our response from the API
    // Set local user
    if(token) { console.log(res); self.user=res.user; }
    self.message =  res.message ? res.message : null;

    //get the user's chartData
    User.getChartData({ userId: self.user.id }, function(data){
      //update current chart data
      Chart.chartData = data;
      //save to localStorage
      $window.localStorage['chartData'] = JSON.stringify(data);
    });

    $location.path("/today");
  }

  self.authorize = function() {
    User.authorize(self.user, processUserData);
  }

  self.join = function() {
    User.join(self.user, processUserData);
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