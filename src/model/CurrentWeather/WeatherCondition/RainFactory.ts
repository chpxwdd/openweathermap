import { IWeatherCondition, EWeatherCondition } from './CurrentWeatherInterface'

export default class RainFactory implements IWeatherCondition {
	code = NaN
	type = EWeatherCondition.RAIN
	description = ''
	icon = '10'

	static build(code: number): IWeatherCondition {
		switch (code) {
			case 500:
				return new LightRain(code)
			case 501:
				return new ModerateRain(code)
			case 502:
				return new HeavyIntensityRain(code)
			case 503:
				return new VeryHeavyRain(code)
			case 504:
				return new ExtremeRain(code)
			case 511:
				return new FreezingRain(code)
			case 520:
				return new LightIntensityShowerRain(code)
			case 521:
				return new ShowerRain(code)
			case 522:
				return new HeavyIntensityShowerRain(code)
			case 531:
				return new RaggedShowerRain(code)
			default:
				throw new Error('Rain weather coFndition not found')
		}
	}
}

class LightRain extends RainFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'light rain'
	}
}
class ModerateRain extends RainFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'moderate rain'
	}
}
class HeavyIntensityRain extends RainFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'heavy intensity rain'
	}
}
class VeryHeavyRain extends RainFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'very heavy rain'
	}
}
class ExtremeRain extends RainFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'extreme rain'
	}
}
class FreezingRain extends RainFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'freezing rain'
		this.icon = '13'
	}
}
class LightIntensityShowerRain extends RainFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.icon = '09'
		this.description = 'light intensity shower rain'
	}
}
class ShowerRain extends RainFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.icon = '09'
		this.description = 'shower rain'
	}
}
class HeavyIntensityShowerRain extends RainFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'heavy intensity shower rain'
		this.icon = '09'
	}
}
class RaggedShowerRain extends RainFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'ragged shower rain'
		this.icon = '09'
	}
}
