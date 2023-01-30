import { ChangeEventHandler, Dispatch, FC, MouseEventHandler, SetStateAction, useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Form, Row } from 'react-bootstrap'

interface ICityFormProps {
	setCity(city: string): void
}

const CurrentWeatherForm: FC<ICityFormProps> = ({ setCity }) => {
	const [cityName, setCityName] = useState<string>('')
	const handleSearch: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault()
		setCity(cityName)
	}

	const handleCityName: ChangeEventHandler<HTMLInputElement> = (e) => {
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
