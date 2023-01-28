import { IWeatherCondition, EWeatherCondition, TWeatherCondition } from './CurrentWeatherInterface'

export default class DrizzleFactory implements IWeatherCondition {
	id = NaN
	main = EWeatherCondition.DRIZZLE
	description = ''
	icon = '09'

	getWeatherCondition(): TWeatherCondition {
		return { id: this.id, main: this.main, description: this.description, icon: this.icon }
	}

	static build(id: number): IWeatherCondition {
		switch (id) {
			default:
			// throw new Error('Drizzle weather condition not found')
			case 300:
				return new LightIntensityDrizzle(id)
			case 301:
				return new Drizzle(id)
			case 302:
				return new HeavyIntensityDrizzle(id)
			case 310:
				return new LightIntensityRainDrizzle(id)
			case 311:
				return new RainDrizzle(id)
			case 312:
				return new HeavyIntensityRainDrizzle(id)
			case 313:
				return new ShowerRainDrizzle(id)
			case 314:
				return new HeavyShowerRainDrizzle(id)
			case 321:
				return new ShowerDrizzle(id)
		}
	}
}

class LightIntensityDrizzle extends DrizzleFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'light intensity drizzle'
	}
}
class Drizzle extends DrizzleFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'light intensity drizzle'
	}
}
class HeavyIntensityDrizzle extends DrizzleFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'heavy intensity drizzle'
	}
}
class LightIntensityRainDrizzle extends DrizzleFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'light intensity drizzle rain'
	}
}
class RainDrizzle extends DrizzleFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'drizzle rain'
	}
}
class HeavyIntensityRainDrizzle extends DrizzleFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'heavy intensity drizzle rain'
	}
}
class ShowerRainDrizzle extends DrizzleFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'shower rain and drizzle'
	}
}
class HeavyShowerRainDrizzle extends DrizzleFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'heavy shower rain and drizzle'
	}
}
class ShowerDrizzle extends DrizzleFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'shower drizzle'
	}
}
