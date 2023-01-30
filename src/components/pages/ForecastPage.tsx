import * as React from 'react'
import { IPageContext, PageContext } from '../context/PageContext'

interface IForecastPageProps {
	// setPage(): void
}

const ForecastPage: React.FC<IForecastPageProps> = () => {
	const { setPage } = React.useContext<IPageContext>(PageContext)

	React.useEffect(() => {
		setPage({ title: 'FORECAST', lead: '10 day forecast weather data' })
	}, [])

	return <>FORECAST PAGE</>
}

export default ForecastPage
