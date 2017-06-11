app.controller('forecastController', 
	['$scope', '$resource', '$timeout', '$routeParams','dataHolder', 
	function($scope, $resource, $timeout, $routeParams, dataHolder) {
		const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
		$scope.city = dataHolder.city
		$scope.days = $routeParams.days || '2'
		let weatherAPI = $resource(
			`//api.openweathermap.org/data/2.5/forecast/daily`
			,
			{
				get: {
					method: 'JSONP'
				}
			}
		)
		$scope.weatherData = []
		weatherAPI.get({
			q: $scope.city,
			cnt: $scope.days,
			appid: config.apiKey
		}).$promise.then( result => {
			for (let i = 0 ; i < result.list.length ; i++) {
				$timeout(() => {
					const loopedData = result.list[i]
					//let day = new Date().getDay(loopedData.dt)
					//console.log(loopedData.dt)
					//day = days[day] //Get day name
					let day = new Date(loopedData.dt * 1000).getDay()
					day = days[day] //Get day name
					let temperature = Math.round(loopedData.temp.day - 273.15)
					$scope.weatherData.push({
						day,
						temperature,
						status: loopedData.weather[0].main
					})
				}, 0)
			}
		})

	}
])

//http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=2&appid=f69578be2785d276ad0277096ffc7553