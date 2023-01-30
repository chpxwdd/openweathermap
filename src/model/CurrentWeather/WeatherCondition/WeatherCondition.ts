import { EWeatherCondition, IWeatherCondition, TWeatherCondition } from './CurrentWeatherInterface'
import ThunderstormFactory from './ThunderstormFactory'
import DrizzleFactory from './DrizzleFactory'
import RainFactory from './RainFactory'
import SnowFactory from './SnowFactory'
import AtmosphereFactory from './AtmosphereFactory'
import ClearFactory from './ClearFactory'
import CloudsFactory from './CloudsFactory'

export class WeatherCondition implements IWeatherCondition {
	id = 800
	main = EWeatherCondition.CLEAR
	icon = '01'
	description = 'clear sky'

	getWeatherCondition(): TWeatherCondition {
		return { id: this.id, main: this.main, description: this.description, icon: this.icon }
	}

	static create(main: EWeatherCondition = EWeatherCondition.CLEAR, id: number = 800): IWeatherCondition {
		switch (main) {
			default:
				throw new Error('Weather condition not found')
			case EWeatherCondition.CLEAR:
				return ClearFactory.build(id)
			case EWeatherCondition.THUNDERSTORM:
				return ThunderstormFactory.build(id)
			case EWeatherCondition.DRIZZLE:
				return DrizzleFactory.build(id)
			case EWeatherCondition.RAIN:
				return RainFactory.build(id)
			case EWeatherCondition.SNOW:
				return SnowFactory.build(id)
			case EWeatherCondition.ATMOSPHERE:
				return AtmosphereFactory.build(id)
			case EWeatherCondition.CLOUDS:
				return CloudsFactory.build(id)
		}
	}
}
