(function(){
	
	angular.module('app').controller('HomeController', ['$scope', 'configService', HomeController]);

	function HomeController($scope, configService){
		
		$scope.environmentSettingsFound = configService.environment != null;
	}

}());