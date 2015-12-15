angular.module('authService',[])

.factory('Auth',function ($http, $q, AuthToken) {
	var authFactory = {};

	authFactory.login = function(
		username, password){
		return $http.post('/api/login',{
			username: username,
			password: password
		})
		.success(function(data){
			AuthToken.setToken(data.token);
			return data;
		})
	}

	authFactory.logout = function(){

		AuthToken.setToken();
	}
	 
})