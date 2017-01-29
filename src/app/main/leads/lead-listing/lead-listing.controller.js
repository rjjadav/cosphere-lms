(function(){
'use strict';

angular.module('app.leads')
	.controller('LeadsListingController', LeadsListingController);

/** ngInject */
function LeadsListingController(api, data){
	var listing = this;
	listing.getAllLeads = getAllLeads;
	listing.selectUserIndex = selectUserIndex;

	listing.leadsList = undefined;
	listing.selectedUserIndex = undefined;

	listing.getAllLeads();
	
	function selectUserIndex(index){
		if(listing.selectedUserIndex !== index)
			listing.selectedUserIndex = index;
		else
			listing.selectedUserIndex = undefined ;
	}

	function getAllLeads(){
		data.post(api.getAllLeads,{leadId: null},{cache:true})
		.then(function(response){
			listing.leadsList = response.data.leads;
		});
	}
}

})();