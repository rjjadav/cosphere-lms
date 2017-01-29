(function(){
'use strict';

angular.module('app.leads')
.controller('LeadEditController', LeadEditController);

LeadEditController.$inject = ['$state','toastr','api','data'];

function LeadEditController($state, toastr, api, data){
	var lead = this;
	lead.getLeadDetails = getLeadDetails;
	lead.saveLeadDetails = saveLeadDetails;

	lead.leadId = $state.params.leadId;
	lead.leadDetails = undefined;

	lead.getLeadDetails(lead.leadId);


	function getLeadDetails(leadId){
		data.post(api.getAllLeads,{leadId: leadId},true)
		.then(function(response){
			if(response.data.leads[0]){
				lead.leadDetails = response.data.leads[0];
			}
		})
		.catch();
	} 

	function saveLeadDetails(leadDetails){
		data.post(api.update,leadDetails,false)
		.then(function(response){
			toastr.success(response.data.message);
			$state.go('app.listing');
		})
		.catch();
	}
}


})();