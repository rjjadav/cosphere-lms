(function(){
'use strict';

angular.module('app.leads',[
		// 'app.leads.listing'
	])
	.config(config);

// config.$inject = ['$stateProvider'];

function config($stateProvider){
	$stateProvider.state('app.listing',{
		url: '/leads',
		views:{
			'content@app' : {
				templateUrl: 'app/main/leads/lead-listing/lead-listing.html',
				controller: 'LeadsListingController',
				controllerAs: 'listing'
			}
		}
	})
	.state('app.edit-lead',{
		url: '/lead/:leadId',
		views:{
			'content@app' : {
				templateUrl: 'app/main/leads/lead-edit/lead-edit.html',
				controller: 'LeadEditController',
				controllerAs: 'lead'
			}
		}
	});
}
})();