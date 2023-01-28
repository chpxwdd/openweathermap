import { EWeatherCondition, IWeatherCondition, TWeatherCondition } from './CurrentWeatherInterface'
import ThunderstormFactory from './ThunderstormFactory'
import DrizzleFactory from './DrizzleFactory'
import RainFactory from './RainFactory'
import SnowFactory from './SnowFactory'
import AtmosphereFactory from './AtmosphereFactory'
import ClearFactory from './ClearFactory'
import CloudsFactory from './CloudsFactory'

export class WeatherCondition implements IWeatherCondition {
	code = 800
	type = EWeatherCondition.CLEAR
	icon = '01'
	description = 'clear sky'

	getWeatherCondition(): TWeatherCondition {
		return { type: this.type, description: this.description, icon: this.icon }
	}

	static create(type: EWeatherCondition = EWeatherCondition.CLEAR, code: number = 800): IWeatherCondition | Error {
		switch (type) {
			case EWeatherCondition.THUNDERSTORM:
				return ThunderstormFactory.build(code)
			case EWeatherCondition.DRIZZLE:
				return DrizzleFactory.build(code)
			case EWeatherCondition.RAIN:
				return RainFactory.build(code)
			case EWeatherCondition.SNOW:
				return SnowFactory.build(code)
			case EWeatherCondition.ATMOSPHERE:
				return AtmosphereFactory.build(code)
			case EWeatherCondition.CLEAR:
				return ClearFactory.build(code)
			case EWeatherCondition.CLOUDS:
				return CloudsFactory.build(code)
			default:
				throw new Error('Weather condition not found')
		}
	}
}
