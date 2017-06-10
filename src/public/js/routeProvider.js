app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/templates/main.html',
			controller: 'mainController'
		})
		.when('/forecast', {
			templateUrl: '/templates/forecast.html',
			controller: 'forecastController'
		})
}])
