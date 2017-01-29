(function(){
'use strict';

angular.module('app.core')
.factory('data', apiService);

apiService.$inject = ['$http'];

function apiService($http){
	var data = {
		get : fnGet,
		post : fnPost,
		delete : fnDelete,
		put : fnPut,
		upload : fnUploadFiles
	};

	return data;

	function fnGet(url, dataToSend, cache){
		dataToSend = dataToSend || {};
		cache = cache || false;

		return $http.get(url,{params : dataToSend}, {cache: cache});
	}

	function fnPost(url, dataToSend, cache){
		dataToSend = dataToSend || {};
		cache = cache || false;
		return $http.post(url, dataToSend, cache);
	}

	function fnDelete(){}

	function fnPut(){}

	function fnUploadFiles(){}
}
})();