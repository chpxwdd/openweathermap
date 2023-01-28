import { EWeatherCondition, IWeatherCondition, TWeatherCondition } from './CurrentWeatherInterface'
import { WeatherCondition } from './WeatherCondition'

export default class ThunderstormFactory implements IWeatherCondition {
	id = NaN
	main = EWeatherCondition.THUNDERSTORM
	description = ''
	icon = '11'

	public getWeatherCondition(): TWeatherCondition {
		return { id: this.id, main: this.main, description: this.description, icon: this.icon }
	}

	static build(id: number): IWeatherCondition {
		switch (id) {
			default:
			// throw new Error('Thunderstorm weather condition not found!')
			case 200:
				return new LightRainThunderstom(id)
			case 201:
				return new RainThunderstom(id)
			case 202:
				return new HeavyRainThunderstom(id)
			case 210:
				return new LightThunderstom(id)
			case 211:
				return new Thunderstom(id)
			case 212:
				return new HeavyThunderstom(id)
			case 221:
				return new RaggedThunderstom(id)
			case 230:
				return new LightDrizzleThunderstom(id)
			case 231:
				return new DrizzleThunderstom(id)
			case 232:
				return new HeavyDrizzleThunderstom(id)
		}
	}
}

class LightRainThunderstom extends ThunderstormFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'thunderstorm with light cls'
	}
}
class RainThunderstom extends ThunderstormFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'thunderstorm with light rain'
	}
}
class HeavyRainThunderstom extends ThunderstormFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'thunderstorm with light rain'
	}
}
class LightThunderstom extends ThunderstormFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'light thunderstorm'
	}
}
class Thunderstom extends ThunderstormFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'thunderstorm'
	}
}
class HeavyThunderstom extends ThunderstormFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'heavy thunderstorm'
	}
}
class RaggedThunderstom extends ThunderstormFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'ragged thunderstorm'
	}
}
class LightDrizzleThunderstom extends ThunderstormFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'thunderstorm with light drizzle'
	}
}
class DrizzleThunderstom extends ThunderstormFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'thunderstorm with drizzle'
	}
}
class HeavyDrizzleThunderstom extends ThunderstormFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'thunderstorm with heavy drizzle'
	}
}
