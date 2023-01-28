import { IWeatherCondition, EWeatherCondition, TWeatherCondition } from './CurrentWeatherInterface'

export default class RainFactory implements IWeatherCondition {
	id = NaN
	main = EWeatherCondition.RAIN
	description = ''
	icon = '10'

	getWeatherCondition(): TWeatherCondition {
		return { id: this.id, main: this.main, description: this.description, icon: this.icon }
	}

	static build(id: number): IWeatherCondition {
		switch (id) {
			default:
			// throw new Error('Rain weather coFndition not found')
			case 500:
				return new LightRain(id)
			case 501:
				return new ModerateRain(id)
			case 502:
				return new HeavyIntensityRain(id)
			case 503:
				return new VeryHeavyRain(id)
			case 504:
				return new ExtremeRain(id)
			case 511:
				return new FreezingRain(id)
			case 520:
				return new LightIntensityShowerRain(id)
			case 521:
				return new ShowerRain(id)
			case 522:
				return new HeavyIntensityShowerRain(id)
			case 531:
				return new RaggedShowerRain(id)
		}
	}
}

class LightRain extends RainFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'light rain'
	}
}
class ModerateRain extends RainFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'moderate rain'
	}
}
class HeavyIntensityRain extends RainFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'heavy intensity rain'
	}
}
class VeryHeavyRain extends RainFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'very heavy rain'
	}
}
class ExtremeRain extends RainFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'extreme rain'
	}
}
class FreezingRain extends RainFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'freezing rain'
		this.icon = '13'
	}
}
class LightIntensityShowerRain extends RainFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.icon = '09'
		this.description = 'light intensity shower rain'
	}
}
class ShowerRain extends RainFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.icon = '09'
		this.description = 'shower rain'
	}
}
class HeavyIntensityShowerRain extends RainFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'heavy intensity shower rain'
		this.icon = '09'
	}
}
class RaggedShowerRain extends RainFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'ragged shower rain'
		this.icon = '09'
	}
}
