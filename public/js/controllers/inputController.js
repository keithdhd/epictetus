angular
.module('Epictetus')
.controller('InputCtrl', InputCtrl);

function InputCtrl(){
  var self = this;

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
    negativeVisulisation: false
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
  
  self.onStart = function () {
      console.log('onStart');
  };
  self.onRender = function () {
      console.log('onRender');
  };
  self.onOpen = function () {
      console.log('onOpen');
  };
  self.onClose = function () {
      console.log('onClose');
  };
  self.onSet = function () {
      console.log('onSet');
  };
  self.onStop = function () {
      console.log('onStop');
  };




  return self;
}
