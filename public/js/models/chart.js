angular
  .module('Epictetus')
  .factory('Chart', Chart);

Chart.$inject = ['User'];

function Chart(){
  var self = this;

  self.chartData = {};


  return self;
}