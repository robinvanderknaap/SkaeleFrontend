(function(){

	var app = angular.module('app');

	app.config(['$stateProvider', '$urlRouterProvider', ConfigureRoutes]);

	function ConfigureRoutes($stateProvider, $urlRouterProvider){

		// For any unmatched url, redirect to home
  		$urlRouterProvider.otherwise("/");

  		$stateProvider
		    .state('home', {
		      url: "/",
		      templateUrl: "modules/home/home.html",
			  controller: "HomeController"
		    })
		    .state('about', {
		      url: "/about",
		      templateUrl: "modules/about/about.html",
			  controller: "AboutController"
		    })
	}
}());