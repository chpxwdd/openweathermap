export type TWeatherCondition = {
	id: number
	main: string
	icon: string
	description: string
}

export interface IWeatherCondition {
	id: number
	main: string
	icon: string
	description: string
	getWeatherCondition(): TWeatherCondition
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
