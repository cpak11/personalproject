angular.module('quovadisapp').controller('homeCtrl', function($scope, homeServ){
	$scope.test = homeServ.ttest;
});