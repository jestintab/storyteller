angular.module('Steller',['appRoutes','mainCtrl','authService','userService','userCtrl','storyService','storyCtrl'])

.config(function($httpProvider){
	$httpProvider.interceptors.push('AuthInterceptor');
})