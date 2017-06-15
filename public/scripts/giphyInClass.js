/*---- CONTROLLERS ----*/

var myApp = angular.module('myApp', []);

// service(GiphyService) needs to be injected into controller before it can be used
myApp.controller('GiphyController', function( GiphyService ){
  var vm = this;

  vm.randomGif = function(){
    console.log('In randomGif');
    GiphyService.getRandom();
  };// end randomGif
}); //end GiphyController
