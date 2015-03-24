


var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);




       
   





myApp.config(['$routeProvider' , function($routeProvider) {
    
    $routeProvider.
    when ('/home' , {
        templateUrl: 'partials/home-page.html',
        reloadOnSearch: false
       
    }).
    
    when ('/artists' , {
        templateUrl: 'partials/artists.html'
    }).
    
    
    otherwise ({
        redirectTo:'/home'
    });
      }]);



 


            