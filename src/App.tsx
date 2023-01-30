import React from 'react'
import { Container, Row, Col, ThemeProvider } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PageContextProvider } from './components/context/PageContext'
import Title from './components/Title'
import { Navbar } from './components/navs/Navbar'
import WeatherPage from './components/pages/WeatherPage'
import ForecastPage from './components/pages/ForecastPage'
import 'bootstrap/dist/css/bootstrap.min.css'

type Props = {
	children: React.ReactNode
}

const App = () => {
	return (
		<ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
			<BrowserRouter>
				<Navbar />
				<PageContextProvider>
					<Container className="mt-3">
						<Title />
						<Routes>
							<Route path="/" element={<WeatherPage />}></Route>
							<Route path="/weather" element={<WeatherPage />}></Route>
							<Route path="/forecast" element={<ForecastPage />}></Route>
							<Route path="*" element={<Navigate to="/" replace />} />
						</Routes>
					</Container>
				</PageContextProvider>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
