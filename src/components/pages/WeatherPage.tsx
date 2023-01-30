import { useState, useContext, FC, useEffect } from 'react'
import { IPageContext, PageContext } from '../context/PageContext'
import CustomForm from '../form/CustomForm'
import CurrentWeatherForm from '../form/CurrentWeatherForm'
import { ICurrentWeather } from '../../model/ICurrentWeather'
import RequestFactory, { IRequest } from '../../model/RequestAPI/RequestFactory'
import { ECall } from '../../model/RequestAPI/Call'
import axios, { Axios, AxiosResponse } from 'axios'
// import CurrentWeatherForm from '../CurrentWeatherForm'

interface IWeatherPageProps {
	// setPage(): void
}

const WeatherPage: FC<IWeatherPageProps> = ({}) => {
	const { setPage } = useContext<IPageContext>(PageContext)

	const [weather, setWeather] = useState<ICurrentWeather>()

	useEffect(() => setPage({ title: 'CURRENT', lead: 'current moment city data' }), [])

	useEffect(() => {
		if (weather !== undefined) console.log(weather)
	}, [weather])

	const fetchWeather = async (city: string) => {
		let requestFactory: IRequest = RequestFactory.request(ECall.CURRENT)
		let endpoint: string = requestFactory.buildEndpoint(city)
		const responce: AxiosResponse = await axios.get(endpoint)
		const currentWeather: ICurrentWeather = responce.data
		setWeather(currentWeather)
	}

	return (
		<>
			<CurrentWeatherForm setCity={(str: string) => fetchWeather(str)} />
		</>
	)
}

export default WeatherPage
