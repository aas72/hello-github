angular
	.module('helloGithub', [])
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
