/**
 *
 * @license The Unlicense, http://unlicense.org/
 * @author  Helder Burato Berto <helder.burato@gmail.com>, https://github.com/helderburato/angular-session.git
 *
 */

'use strict';

angular
  .module('session')
  .service('session.localStorageManager', localStorageManager);

localStorageManager.$inject = [
  '$localStorage',
  'session.prefix'
];

function localStorageManager($localStorage, prefix) {

  var output = {};

  output.getStorage = function(key) {

    if ($localStorage[prefix.storage+key]) {
      return JSON.parse($localStorage[prefix.storage+key]);
    }
  };

  output.setStorage = function(obj, key) {

    if (!$localStorage[prefix.storage+key]) {
      $localStorage[prefix.storage+key] = JSON.stringify(obj);
    }
    return true;
  };

  return output;

}