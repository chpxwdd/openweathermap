import { EWeatherCondition, IWeatherCondition, TWeatherCondition } from './CurrentWeatherInterface'

export default class AtmosphereFactory implements IWeatherCondition {
	id = NaN
	main = EWeatherCondition.SNOW
	description = ''
	icon = '50'

	getWeatherCondition(): TWeatherCondition {
		return { id: this.id, main: this.main, description: this.description, icon: this.icon }
	}

	static build(id: number): IWeatherCondition {
		switch (id) {
			default:
			// 	throw new Error('Atmosphere weather condition not found')
			case 701:
				return new Mist(id)
			case 711:
				return new Smoke(id)
			case 721:
				return new Haze(id)
			case 731:
				return new SandDust(id)
			case 741:
				return new Fog(id)
			case 751:
				return new Sand(id)
			case 761:
				return new Dust(id)
			case 762:
				return new Ash(id)
			case 771:
				return new Squall(id)
			case 781:
				return new Tornado(id)
		}
	}
}

class Mist extends AtmosphereFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'mist'
	}
}
class Smoke extends AtmosphereFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'Smoke'
	}
}
class Haze extends AtmosphereFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'haze'
	}
}
class SandDust extends AtmosphereFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'sand/ dust whirls'
	}
}
class Fog extends AtmosphereFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'fog'
	}
}
class Sand extends AtmosphereFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'sand'
	}
}
class Dust extends AtmosphereFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'dust'
	}
}
class Ash extends AtmosphereFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'volcanic ash'
	}
}
class Squall extends AtmosphereFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'squalls'
	}
}
class Tornado extends AtmosphereFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'tornado'
	}
}
