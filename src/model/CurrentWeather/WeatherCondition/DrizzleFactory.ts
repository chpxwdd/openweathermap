import { IWeatherCondition, EWeatherCondition } from './CurrentWeatherInterface'

export default class DrizzleFactory implements IWeatherCondition {
	code = NaN
	type = EWeatherCondition.DRIZZLE
	description = ''
	icon = '09'

	static build(code: number): IWeatherCondition {
		switch (code) {
			case 300:
				return new LightIntensityDrizzle(code)
			case 301:
				return new Drizzle(code)
			case 302:
				return new HeavyIntensityDrizzle(code)
			case 310:
				return new LightIntensityRainDrizzle(code)
			case 311:
				return new RainDrizzle(code)
			case 312:
				return new HeavyIntensityRainDrizzle(code)
			case 313:
				return new ShowerRainDrizzle(code)
			case 314:
				return new HeavyShowerRainDrizzle(code)
			case 321:
				return new ShowerDrizzle(code)
			default:
				throw new Error('Drizzle weather condition not found')
		}
	}
}

class LightIntensityDrizzle extends DrizzleFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'light intensity drizzle'
	}
}
class Drizzle extends DrizzleFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'light intensity drizzle'
	}
}
class HeavyIntensityDrizzle extends DrizzleFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'heavy intensity drizzle'
	}
}
class LightIntensityRainDrizzle extends DrizzleFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'light intensity drizzle rain'
	}
}
class RainDrizzle extends DrizzleFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'drizzle rain'
	}
}
class HeavyIntensityRainDrizzle extends DrizzleFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'heavy intensity drizzle rain'
	}
}
class ShowerRainDrizzle extends DrizzleFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'shower rain and drizzle'
	}
}
class HeavyShowerRainDrizzle extends DrizzleFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'heavy shower rain and drizzle'
	}
}
class ShowerDrizzle extends DrizzleFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'shower drizzle'
	}
}
