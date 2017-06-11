app.config(['$routeProvider', '$sceDelegateProvider', 
	function ($routeProvider, $sceDelegateProvider) {
		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'//api.openweathermap.org/**'
		])
		$routeProvider
			.when('/', {
				templateUrl: '/templates/main.html',
				controller: 'mainController'
			})
			.when('/forecast/:days', {
				templateUrl: '/templates/forecast.html',
				controller: 'forecastController'
			})
	}
])
