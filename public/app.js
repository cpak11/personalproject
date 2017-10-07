angular.module('quovadisapp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: '/public/src/components/home/home.html',
		controller: 'homeCtrl'
	})


});