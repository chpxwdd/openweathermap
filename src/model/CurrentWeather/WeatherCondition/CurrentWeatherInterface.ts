export type TWeatherCondition = {
	type: string
	icon: string
	description: string
}

export interface IWeatherCondition {
	code: number
	type: string
	icon: string
	description: string

	// getWeatherCondition(): TWeatherCondition
}

export enum EWeatherCondition {
	THUNDERSTORM = 'Thunderstorm',
	DRIZZLE = 'Drizzle',
	RAIN = 'Rain',
	SNOW = 'Snow',
	ATMOSPHERE = 'Atmosphere',
	CLEAR = 'Clear',
	CLOUDS = 'Clouds',
}
