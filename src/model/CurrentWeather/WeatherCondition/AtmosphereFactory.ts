import { EWeatherCondition, IWeatherCondition } from './CurrentWeatherInterface'

export default class AtmosphereFactory implements IWeatherCondition {
	code = NaN
	type = EWeatherCondition.SNOW
	description = ''
	icon = '50'

	static build(code: number): IWeatherCondition {
		switch (code) {
			case 701:
				return new Mist(code)
			case 711:
				return new Smoke(code)
			case 721:
				return new Haze(code)
			case 731:
				return new SandDust(code)
			case 741:
				return new Fog(code)
			case 751:
				return new Sand(code)
			case 761:
				return new Dust(code)
			case 762:
				return new Ash(code)
			case 771:
				return new Squall(code)
			case 781:
				return new Tornado(code)
			default:
				throw new Error('Atmosphere weather condition not found')
		}
	}
}

class Mist extends AtmosphereFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'mist'
	}
}
class Smoke extends AtmosphereFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'Smoke'
	}
}
class Haze extends AtmosphereFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'haze'
	}
}
class SandDust extends AtmosphereFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'sand/ dust whirls'
	}
}
class Fog extends AtmosphereFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'fog'
	}
}
class Sand extends AtmosphereFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'sand'
	}
}
class Dust extends AtmosphereFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'dust'
	}
}
class Ash extends AtmosphereFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'volcanic ash'
	}
}
class Squall extends AtmosphereFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'squalls'
	}
}
class Tornado extends AtmosphereFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'tornado'
	}
}
