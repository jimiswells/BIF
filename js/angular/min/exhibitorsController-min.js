myApp.controller("exhibitorsController",["$scope","$http","$routeParams","$anchorScroll","$location",function(t,r,e,i,c){r.get("exhibitors.json").success(function(r){t.exhibitors=r,console.log(t.exhibitors)})}]),myApp.directive("intro",function(){return{restrict:"E",templateUrl:"partials/intro.html"}}),myApp.directive("about",function(){return{restrict:"E",templateUrl:"partials/about.html"}}),myApp.directive("services",function(){return{restrict:"E",templateUrl:"partials/services.html"}}),myApp.directive("projectIntro",function(){return{restrict:"E",templateUrl:"partials/project-intro.html"}}),myApp.directive("workIntro",function(){return{restrict:"E",templateUrl:"partials/work-intro.html"}}),myApp.directive("projectImages",function(){return{restrict:"E",templateUrl:"partials/project-images.html"}}),myApp.directive("caseStudyHen",function(){return{restrict:"E",templateUrl:"partials/case-study-hen.html"}}),myApp.directive("caseStudyLockson",function(){return{restrict:"E",templateUrl:"partials/case-study-lockson.html"}}),myApp.directive("caseStudyPackaging",function(){return{restrict:"E",templateUrl:"partials/case-study-packaging.html"}}),myApp.directive("clients",function(){return{restrict:"E",templateUrl:"partials/clients.html"}}),myApp.directive("contact",function(){return{restrict:"E",templateUrl:"partials/contact.html"}});