/*---- SERVICES ----*/

myApp.service('GiphyService', function(){
  var sv = this;

  // this function gets called from the CONTROLLERS
  sv.getRandom = function(){
    console.log('In getRandom');
    //http calls happen here...

  }; //end of getRandom
}); //end GiphyService
