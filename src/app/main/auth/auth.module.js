(function(){
'use strict';

angular.module('app.auth',['app.auth.login'])
.config(config);

/** ngInject */
function config($stateProvider){
	$stateProvider.state('app.auth',{
		abstract : true,
		views : {
			'main@':{
				templateUrl: 'app/core/layout/content-only-layout.html',
				controller: 'MainController',
				controllerAs: 'main'
			}
		}
	})
}
})();