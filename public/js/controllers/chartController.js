angular
.module('Epictetus')
.controller('ChartController', ChartController)

ChartController.$inject = ['User', 'Chart'];

function ChartController(User, Chart){
  var self = this;

  self.getChartData = function(){
    return Chart.chartData;
  }

  self.labels = ["January", "February", "March", "April", "May", "June", "July"];
  self.series = ['Your Stoic Progress'];
  self.data = [
    [65, 59, 80, 81, 56, 55, 40]
  ];

  return self;
}