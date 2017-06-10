app.controller('forecastController', ['$scope', 'dataHolder', 
	function($scope, dataHolder) {
		$scope.city = dataHolder.city
	}
])