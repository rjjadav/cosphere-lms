(function(){
'use strict';

angular.module('app.auth.login',[])
.config(config);

/** ngInject */
function config($stateProvider){
	$stateProvider.state('app.auth.login',{
		url : '/auth/login',
		views: {
			'content@app.auth': {
				templateUrl:	'app/main/auth/login/login.html',
				controller:		'LoginController',
				controllerAs:	'login'
			}
		}
	})
}
})();