import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
	const navigate = useNavigate()

	return (
		<nav className="navbar navbar-expand-sm  navbar-dark bg-dark">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#appNavbarToggler"
					aria-controls="appNavbarToggler"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="appNavbarToggler">
					<a className="navbar-brand" href="/">
						OpenWeatherMap API client
					</a>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink to="/current" className="nav-link">
								Current weather
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/forecast" className="nav-link">
								Forecast weather
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/history" className="nav-link">
								Historical weather data
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
