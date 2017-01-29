'use strict';

angular.module('app.core')
.constant('api',(apiConstant)());

function apiConstant(){
	var env = 'dev';

	var url = {
		dev : {
			backend : 'http://45.56.97.181:8080/cosphereLMS', ///cosphere/getHomePageData'
		},
		uat: {

		},
		prod: {

		}
	}

	var config = {
		login			: url[env].backend + '/oauth/token',
		getAllLeads		: url[env].backend + '/getAllLeads',
		update			: url[env].backend + '/update',
	}

	return config;
}