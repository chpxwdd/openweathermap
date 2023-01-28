import { EWeatherCondition, IWeatherCondition, TWeatherCondition } from './CurrentWeatherInterface'

export default class ClearFactory implements IWeatherCondition {
	id = NaN
	main = EWeatherCondition.CLEAR
	description = ''
	icon = '01'

	getWeatherCondition(): TWeatherCondition {
		return { id: this.id, main: this.main, description: this.description, icon: this.icon }
	}

	static build(id: number): IWeatherCondition {
		switch (id) {
			default:
			// throw new Error('Clear weather condition not found')
			case 800:
				return new Clear(id)
		}
	}
}

class Clear extends ClearFactory {
	constructor(id: number) {
		super()
		this.id = id
		this.description = 'clear sky'
	}
}
