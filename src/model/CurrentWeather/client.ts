import { WeatherCondition } from './WeatherCondition/WeatherCondition'
import { EWeatherCondition, TWeatherCondition } from './WeatherCondition/CurrentWeatherInterface'

type dataElement = {
	main: EWeatherCondition
	codes: number[]
}
let data: dataElement[] = [
	{ main: EWeatherCondition.THUNDERSTORM, codes: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232] },
	{ main: EWeatherCondition.DRIZZLE, codes: [300, 301, 302, 310, 311, 312, 313, 314, 321] },
	{ main: EWeatherCondition.RAIN, codes: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531] },
	{ main: EWeatherCondition.SNOW, codes: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622] },
	{ main: EWeatherCondition.ATMOSPHERE, codes: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781] },
	{ main: EWeatherCondition.CLEAR, codes: [800] },
	{ main: EWeatherCondition.CLOUDS, codes: [801, 802, 803, 804] },
]

data.forEach((elem: dataElement) => {
	elem.codes.forEach((code: number) => {
		let ws: TWeatherCondition = WeatherCondition.create(elem.main, code).getWeatherCondition()
		console.log(`{ main: '${ws.main}', code: ${ws.id}, description: '${ws.description}', icon: '${ws.icon}' } `)
	})
})
