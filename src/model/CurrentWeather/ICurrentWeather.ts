export interface ICurrentWeather {
	coord: {
		lon: number
		lat: number
	}
	weather: [
		{
			id: number
			main: string // "Clouds",
			description: string //"overcast clouds",
			icon: string // "04d"
		}
	]
	base: string //"stations",
	main: {
		temp: number //271.24,
		feels_like: number // 265.98,
		temp_min: number //270.9,
		temp_max: number //271.44,
		pressure: number //1021,
		humidity: number //89,
		sea_level: number //1021,
		grnd_level: number //1002
	}
	visibility: number //10000,
	wind: {
		speed: number //4.79,
		deg: number //233,
		gust: number //11.92
	}
	clouds: {
		all: number //99
	}
	dt: number //1674729085,
	sys: {
		type: number //2,
		id: number //2000314,
		country: string //"RU",
		sunrise: number //1674711289,
		sunset: number //1674740931
	}
	timezone: number //10800,
	id: number //524901,
	name: string //"Moscow",
	cod: number //200
}
