angular
.module('Epictetus')
.controller('ChartController', ChartController)

ChartController.$inject = ['User', 'Chart', 'TokenService'];

function ChartController(User, Chart, TokenService){
  var self = this;
  self.chart = Chart;

  if(TokenService.isLoggedIn()){
    self.chart.setChartData();
  }

  self.labels = self.chart.labels;
  self.data = self.chart.data;
  self.series = ['Progress'];

  console.log("hello, I'm ChartController");
  console.log(self.chart);

  return self;
}