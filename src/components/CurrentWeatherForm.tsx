import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import OWM_API from '../config/owm.api.js'
import axios from 'axios'

interface ICityFormProps {
	name?: string
}

const CurrentWeatherForm: React.FC<ICityFormProps> = () => {
	const [cityName, setCityName] = React.useState<string>('')
	const [searching, setSearching] = React.useState<boolean>(false)

	const handleSearch: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
		e.preventDefault()
		const responce = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OWM_API.default.apikey}`
		)
		console.log(responce.data)
	}
	const handleCityName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setCityName(e.target.value)
	}

	return (
		<Form>
			<Form.Group as={Row} controlId="formCityName">
				<Form.Label column sm="2">
					Type city name
				</Form.Label>
				<Col sm="5">
					<Form.Control type="text" value={cityName} onChange={handleCityName} />
				</Col>
				<Col sm="auto">
					<Button type="submit" className="mb-2" onClick={handleSearch}>
						<FontAwesomeIcon icon={faSearch} />
					</Button>
				</Col>
			</Form.Group>
		</Form>
	)
}

export default CurrentWeatherForm
