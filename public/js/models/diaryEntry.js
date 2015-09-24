angular
  .module('Epictetus')
  .factory('DiaryEntry', DiaryEntry);

  DiaryEntry.$inject = ['$resource', 'API'];

function DiaryEntry($resource, API) {
  var url = 'http://localhost:3000/api'

  return $resource(
    url+'/entries/:id',
    {id: '@id'},
    { 'get':       { method: 'GET' },
      'save':      { method: 'POST' },
      'query':     { method: 'GET', isArray: true},
      'remove':    { method: 'DELETE' },
      'delete':    { method: 'DELETE' }
    }
  );
}