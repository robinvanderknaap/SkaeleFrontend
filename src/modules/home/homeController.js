(function(){
	
	angular.module('app').controller('HomeController', HomeController);

	function HomeController($scope, $http){
		
		$scope.message = "Mooie kerel";

		var onRobinLoaded = function(response){
			$scope.robin = response.data;
		}

		$scope.showRobin = function(){
			$http.get('https://api.github.com/users/robinvanderknaap')
				.then(onRobinLoaded);
		}

	}

}())