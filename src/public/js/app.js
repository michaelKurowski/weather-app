const app = angular.module('weatherApp', ['ngRoute'])

app.controller('mainController', ['$scope', function($scope) {
	$scope.title = 'Weather App name'
}])