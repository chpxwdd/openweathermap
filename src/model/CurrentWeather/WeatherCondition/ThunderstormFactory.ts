import { EWeatherCondition, IWeatherCondition, TWeatherCondition } from './CurrentWeatherInterface'
import { WeatherCondition } from './WeatherCondition'

export default class ThunderstormFactory implements IWeatherCondition {
	type = EWeatherCondition.THUNDERSTORM
	icon = '11'
	description = ''
	code = NaN

	static build(code: number): IWeatherCondition {
		switch (code) {
			case 200:
				return new LightRainThunderstom(code)
			case 201:
				return new RainThunderstom(code)
			case 202:
				return new HeavyRainThunderstom(code)
			case 210:
				return new LightThunderstom(code)
			case 211:
				return new Thunderstom(code)
			case 212:
				return new HeavyThunderstom(code)
			case 221:
				return new RaggedThunderstom(code)
			case 230:
				return new LightDrizzleThunderstom(code)
			case 231:
				return new DrizzleThunderstom(code)
			case 232:
				return new HeavyDrizzleThunderstom(code)
			default:
				throw new Error('Thunderstorm weather condition not found!')
		}
	}
}

class LightRainThunderstom extends ThunderstormFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'thunderstorm with light cls'
	}
}
class RainThunderstom extends ThunderstormFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'thunderstorm with light rain'
	}
}
class HeavyRainThunderstom extends ThunderstormFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'thunderstorm with light rain'
	}
}
class LightThunderstom extends ThunderstormFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'light thunderstorm'
	}
}
class Thunderstom extends ThunderstormFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'thunderstorm'
	}
}
class HeavyThunderstom extends ThunderstormFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'heavy thunderstorm'
	}
}
class RaggedThunderstom extends ThunderstormFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'ragged thunderstorm'
	}
}
class LightDrizzleThunderstom extends ThunderstormFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'thunderstorm with light drizzle'
	}
}
class DrizzleThunderstom extends ThunderstormFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'thunderstorm with drizzle'
	}
}
class HeavyDrizzleThunderstom extends ThunderstormFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'thunderstorm with heavy drizzle'
	}
}
