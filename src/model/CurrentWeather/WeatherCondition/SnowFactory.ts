import { IWeatherCondition, EWeatherCondition } from './CurrentWeatherInterface'

export default class SnowFactory implements IWeatherCondition {
	code = NaN
	type = EWeatherCondition.SNOW
	description = ''
	icon = '13'

	static build(code: number): IWeatherCondition {
		switch (code) {
			case 600:
				return new LightSnow(code)
			case 601:
				return new Snow(code)
			case 602:
				return new HeavySnow(code)
			case 611:
				return new Sleet(code)
			case 612:
				return new LightShowerSleet(code)
			case 613:
				return new ShowerSleet(code)
			case 615:
				return new LightRainSnow(code)
			case 616:
				return new RainSnow(code)
			case 620:
				return new LightShowerSnow(code)
			case 621:
				return new ShowerSnow(code)
			case 622:
				return new HeavyShowerSnow(code)
			default:
				throw new Error('Snow weather condition not found')
		}
	}
}

class LightSnow extends SnowFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'light snow'
	}
}
class Snow extends SnowFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'snow'
	}
}
class HeavySnow extends SnowFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'heavy snow'
	}
}
class Sleet extends SnowFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'sleet'
	}
}
class LightShowerSleet extends SnowFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'light shower sleet'
	}
}
class ShowerSleet extends SnowFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'light rain and snow'
	}
}
class LightRainSnow extends SnowFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'light rain and snow'
	}
}
class RainSnow extends SnowFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'rain and snow'
	}
}
class LightShowerSnow extends SnowFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'light shower snow'
	}
}
class ShowerSnow extends SnowFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'shower snow'
	}
}
class HeavyShowerSnow extends SnowFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'heavy shower snow'
	}
}
