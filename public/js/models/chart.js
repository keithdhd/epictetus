angular
  .module('Epictetus')
  .factory('Chart', Chart);

Chart.$inject = ['$window'];

function Chart($window, TokenService){
  var self = this;
  var monthsToString = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  self.setChartData = function(){
    self.labels = [];
    self.data = [];
    self.data[0] = [];
    
    var data = JSON.parse($window.localStorage['chartData']);

    for (var i = 0; i < data.length; i++) {
      var dayData = data[i];
      dayData.date = new Date(dayData.date);

      // add the final element of the array to the labels array
      self.labels.push( dayData.date.getDate() + ' ' + monthsToString[dayData.date.getMonth()]);

      //initialize score
      self.data[0].push(0);

      for(var key in dayData){
        if(dayData.hasOwnProperty(key)){
          if(dayData[key] === true){
            self.data[0][self.data[0].length - 1]++;
          }
        }
      }   
    };
  }

  //self.chartData.labels;
  //self.chartData.series;

  return self;
}