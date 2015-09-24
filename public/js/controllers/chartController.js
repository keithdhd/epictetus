angular
.module('Epictetus')
.controller('ChartController', ChartController)

ChartController.$inject = ['User', 'chart.js']

function ChartController(User, chart){
  var self = this;




  return this;
}