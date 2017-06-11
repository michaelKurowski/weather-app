app.controller('mainController', ['$scope', 'dataHolder', 
	function($scope, dataHolder) {
		$scope.city = dataHolder.city
		$scope.$watch('city', function (newValue) {
			dataHolder.city = newValue
		})
	}
])

