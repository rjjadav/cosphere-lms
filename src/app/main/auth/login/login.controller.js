(function(){
'use strict';

angular.module('app.auth.login')
.controller('LoginController', LoginController);

LoginController.$inject = ['$state','$cookies','toastr','api','data'];

function LoginController($state, $cookies, toastr, api, data){
	var login = this;
	login.loginUser = loginUser;
	
	login.loading = false;

	function loginUser(loginDetails){
		loginDetails.grant_type = 'password';
		loginDetails.client_id = 'restapp';
		loginDetails.client_secret = "restapp";

		login.loading = true;
		data.get(api.login, loginDetails, false)
		.then(function(response){
			if(response.status == 200){
				$cookies.putObject('lAt',response.data);
				$state.go('app.listing');
			}else{
				toastr.danger("Invalid Username or Password");
			}
			login.loading = false;
		},function(error){
			toastr.error("Invalid Username or Password");
			login.loading = false;
		});
	}
}
})();