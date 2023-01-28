import React, { useEffect, useState } from "react"
import { Container, Row, Col, ThemeProvider } from "react-bootstrap"
import Title from "./components/Title"
import CurrentWeatherForm from "./components/CurrentWeatherForm"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
	return (
		<ThemeProvider
			breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
			minBreakpoint="xxs"
		>
			<Container>
				<Title title="Current weather" lead="search weather in cities" />
				<Row>
					<Col>
						<CurrentWeatherForm />
					</Col>
				</Row>
			</Container>
		</ThemeProvider>
	)
}

export default App
