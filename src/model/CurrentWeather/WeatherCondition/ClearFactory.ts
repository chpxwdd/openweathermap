import { EWeatherCondition, IWeatherCondition } from './CurrentWeatherInterface'

export default class ClearFactory implements IWeatherCondition {
	code = NaN
	type = EWeatherCondition.CLEAR
	description = ''
	icon = '01'

	static build(code: number): IWeatherCondition {
		switch (code) {
			case 800:
				return new Clear(code)
			default:
				throw new Error('Clear weather condition not found')
		}
	}
}

class Clear extends ClearFactory {
	constructor(code: number) {
		super()
		this.code = code
		this.description = 'clear sky'
	}
}
