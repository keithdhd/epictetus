angular
.module('Epictetus')
.controller('InputCtrl', InputCtrl);

InputCtrl.$inject = ['DiaryEntry', '$location', 'TokenService', '$window'];

function InputCtrl(DiaryEntry, $location, TokenService ,$window){
  var self = this;
  self.user = {};

  // GET CURRENT USER INFO
  if ($window.localStorage['secret-handshake']) {
    self.user = TokenService.parseJwt();
  }

  // Stoic Form inputs
  // An object of the Stoic attributes we want to record
  self.inputs = {
    control: false,
    vastness: false,
    acceptFailure: false,
    resistance: false,
    temptation: false,
    focus: false,
    ownCompany: false,
    negativeVisulisation: false,
    user: self.user
  };

  // Date input
  var currentTime = new Date();
  self.currentTime = currentTime;
  self.month = ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  self.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  self.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  self.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  self.disable = [false, 1, 7];
  self.today = 'Today';
  self.clear = 'Clear';
  self.close = 'Close';
  var days = 15;
  self.minDate = (new Date(self.currentTime.getTime() - ( 1000 * 60 * 60 *24 * days ))).toISOString();
  self.maxDate = (new Date(self.currentTime.getTime() + ( 1000 * 60 * 60 *24 * days ))).toISOString();
  

  self.save = function(){
    var dateToSave = self.currentTime;

    if(typeof dateToSave === 'string'){
      var dateArray = self.currentTime.split('/');
      dateToSave = new Date(dateArray[2], dateArray[1]-1, dateArray[0]);
    }

    self.inputs.date = dateToSave;

    DiaryEntry.save(self.inputs, function(err, diaryEntry){
      console.log(diaryEntry);
      $location.path('/progress');
    });
  }

  return self;
}
