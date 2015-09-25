angular
  .module('Epictetus')
  .factory('Chart', Chart);

Chart.$inject = ['$window'];

function Chart($window){
  var self = this;

  self.chartData = $window.localStorage['chartData'];

  return self;
}