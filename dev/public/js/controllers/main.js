'use strict';

app.controller('mainController', ['$scope', 'dataHolder', function ($scope, dataHolder) {
	$scope.title = 'Weather App name';
	$scope.city = dataHolder.city;
	$scope.$watch('city', function (newValue) {
		dataHolder.city = newValue;
	});
}]);