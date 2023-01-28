import { EWeatherCondition, IWeatherCondition } from './CurrentWeatherInterface'
import { WeatherCondition } from './WeatherCondition'

export default class CloudsFactory implements IWeatherCondition {
	code = NaN
	type = EWeatherCondition.CLEAR
	description = ''
	icon = '04'

	static build(code: number): IWeatherCondition {
		switch (code) {
			case 801:
				return new FewClouds(code)
			case 802:
				return new ScatteredClouds(code)
			case 803:
				return new BrokenClouds(code)
			case 804:
				return new OvercastClouds(code)
			default:
				throw new Error('Clear weather condition not found')
		}
	}
}

class FewClouds extends CloudsFactory {
	constructor(code: number) {
		super()
		this.icon = String('02')
		this.code = code
		this.description = 'few clouds: 11-24%'
	}
}
class ScatteredClouds extends CloudsFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.icon = String('03')
		this.description = 'scattered clouds: 25-50%'
	}
}
class BrokenClouds extends CloudsFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'broken clouds: 51-84%'
	}
}
class OvercastClouds extends CloudsFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'overcast clouds: 85-100%'
	}
}
