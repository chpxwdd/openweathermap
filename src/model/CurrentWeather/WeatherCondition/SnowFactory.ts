import { IWeatherCondition, EWeatherCondition, TWeatherCondition } from './CurrentWeatherInterface'

export default class SnowFactory implements IWeatherCondition {
	id = NaN
	main = EWeatherCondition.SNOW
	description = ''
	icon = '13'

	getWeatherCondition(): TWeatherCondition {
		return { id: this.id, main: this.main, description: this.description, icon: this.icon }
	}
	static build(id: number): IWeatherCondition {
		switch (id) {
			default:
			// throw new Error('Snow weather condition not found')
			case 600:
				return new LightSnow(id)
			case 601:
				return new Snow(id)
			case 602:
				return new HeavySnow(id)
			case 611:
				return new Sleet(id)
			case 612:
				return new LightShowerSleet(id)
			case 613:
				return new ShowerSleet(id)
			case 615:
				return new LightRainSnow(id)
			case 616:
				return new RainSnow(id)
			case 620:
				return new LightShowerSnow(id)
			case 621:
				return new ShowerSnow(id)
			case 622:
				return new HeavyShowerSnow(id)
		}
	}
}

class LightSnow extends SnowFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'light snow'
	}
}
class Snow extends SnowFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'snow'
	}
}
class HeavySnow extends SnowFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'heavy snow'
	}
}
class Sleet extends SnowFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'sleet'
	}
}
class LightShowerSleet extends SnowFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'light shower sleet'
	}
}
class ShowerSleet extends SnowFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'light rain and snow'
	}
}
class LightRainSnow extends SnowFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'light rain and snow'
	}
}
class RainSnow extends SnowFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'rain and snow'
	}
}
class LightShowerSnow extends SnowFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'light shower snow'
	}
}
class ShowerSnow extends SnowFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'shower snow'
	}
}
class HeavyShowerSnow extends SnowFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'heavy shower snow'
	}
}
