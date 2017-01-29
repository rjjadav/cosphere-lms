(function(){
'use strict';

angular.module('cosphereLms')
.controller('IndexController', IndexController);

IndexController.$inject = ['$mdSidenav'];

function IndexController($mdSidenav){
	var vm = this;
	vm.lockLeft = true;
}

})();