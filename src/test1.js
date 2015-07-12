angular
	.module('templates',[]);

angular
	.module('helloGithub', ['templates'])
	.directive('helloGithub', function() {
		return {
			templateUrl: 'test1.html'
		};
	});