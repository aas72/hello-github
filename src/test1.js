angular
	.module('templates',[]);

angular
	.module('helloGithub', ['templates'])
	.controller('helloGithubController', ['$scope', function($scope) {
		$scope.clickCount = 0;

		$scope.clicked = function() {
			$scope.clickCount++;
		}
	}])
	.directive('helloGithub', function() {
		return {
			scope: {},
			templateUrl: 'test1.html'
		};
	});
