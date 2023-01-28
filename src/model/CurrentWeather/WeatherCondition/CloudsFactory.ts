import { EWeatherCondition, IWeatherCondition, TWeatherCondition } from './CurrentWeatherInterface'
import { WeatherCondition } from './WeatherCondition'

export default class CloudsFactory implements IWeatherCondition {
	id = NaN
	main = EWeatherCondition.CLEAR
	description = ''
	icon = '04'
	getWeatherCondition(): TWeatherCondition {
		return { id: this.id, main: this.main, description: this.description, icon: this.icon }
	}

	static build(id: number): IWeatherCondition {
		switch (id) {
			default:
			// throw new Error('Clear weather condition not found')
			case 801:
				return new FewClouds(id)
			case 802:
				return new ScatteredClouds(id)
			case 803:
				return new BrokenClouds(id)
			case 804:
				return new OvercastClouds(id)
		}
	}
}

class FewClouds extends CloudsFactory {
	constructor(id: number) {
		super()
		this.icon = String('02')
		this.id = id
		this.description = 'few clouds: 11-24%'
	}
}
class ScatteredClouds extends CloudsFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.icon = String('03')
		this.description = 'scattered clouds: 25-50%'
	}
}
class BrokenClouds extends CloudsFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'broken clouds: 51-84%'
	}
}
class OvercastClouds extends CloudsFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'overcast clouds: 85-100%'
	}
}
