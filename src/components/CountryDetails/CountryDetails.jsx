import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dataStore from '../../store/data-store';
import { loadCountry } from '../../actions/actions-creator';
import Subheader from '../Subheader/Subheader';
import { Link } from 'react-router-dom';

import './CountryDetails.css';
/* import {
	Sparklines,
	SparklinesLine,
	SparklinesReferenceLine
} from 'react-sparklines'; */

function CountryDetails({ match }) {
	const [countryName] = useState(match.params.countryName);
	const [country, setCountry] = useState(null);
	const [countryInfo, setCountryInfo] = useState(null);

	function handleChange() {
		setCountry(dataStore.getCountry());
		setCountryInfo(dataStore.getCountryInfo());
	}

	useEffect(() => {
		dataStore.addEventListener(handleChange);

		if (countryName && !country && !countryInfo) {
			loadCountry(countryName);
		}

		return () => {
			dataStore.removeEventListener(handleChange);
		};
	}, [countryName, country, countryInfo]);

	return (
		<>
			{!country && (
				<>
					<Subheader title="" className="subheader" />
					<div className="detail-body-loading">
						<div
							className="spinner-border text-danger"
							style={{ width: '3rem', height: '3rem' }}
							role="status"
						>
							<span className="sr-only">Loading...</span>
						</div>
						<h3 id="loading-text">Loading...</h3>
					</div>
				</>
			)}
			{country && (
				<div className="detail-body" data-testid="detail-body">
					<Subheader
						title={`${dataStore.capitalize(countryName)}`}
						image={dataStore.getFlag(countryInfo)}
						className="subheader"
					/>
					<article className="data-and-info">
						<section className="covid-data data-block">
							{
								<section className="covid-data__ul data-block">
									<div className="card data-block__ul1 mb-4 shadow-sm">
										<div className="card-header">
											<h4 className="my-0 font-weight-normal">
												Cases until today
											</h4>
										</div>
										<ul className="list-unstyled mt-3 mb-4">
											<div className="card-body">
												{dataStore.todayConfirmed(country, countryName) && (
													<li className="data-block__text">
														<b>Total cases:</b>{' '}
														{dataStore.todayConfirmed(country, countryName)}
													</li>
												)}
												{dataStore.todayDeaths(country, countryName) && (
													<li className="data-block__text">
														<b>Total deaths:</b>{' '}
														{dataStore.todayDeaths(country, countryName)}
													</li>
												)}
												{dataStore.todayTotalHospitalisedPatients(
													country,
													countryName
												) && (
													<li className="data-block__text">
														<b>Total number of hospitalised patients:</b>{' '}
														{dataStore.todayTotalHospitalisedPatients(
															country,
															countryName
														)}
													</li>
												)}
												{dataStore.todayIntensiveCare(country, countryName) && (
													<li className="data-block__text">
														<b>Total number of intensive cares:</b>{' '}
														{dataStore.todayIntensiveCare(country, countryName)}
													</li>
												)}
												{dataStore.todayRecovered(country, countryName) && (
													<li className="data-block__text">
														<b>Total recovered:</b>{' '}
														{dataStore.todayRecovered(country, countryName)}
													</li>
												)}
												{dataStore.todayOpenCases(country, countryName) && (
													<li className="data-block__text">
														<b>Open cases today:</b>{' '}
														{dataStore.todayOpenCases(country, countryName)}
													</li>
												)}
												{dataStore.casesPerHundredThousand(
													country,
													countryName
												) && (
													<li className="data-block__text">
														<b>Actual rate of open cases:</b>{' '}
														{dataStore.casesPerHundredThousand(
															country,
															countryName
														)}{' '}
														/ 100.000 population
													</li>
												)}
											</div>
										</ul>
									</div>
									{(dataStore.newConfirmedToday(country, countryName) ||
										dataStore.todayNewDeaths(country, countryName) ||
										dataStore.todayNewTotalHospitalisedPatients(
											country,
											countryName
										) ||
										dataStore.todayNewIntensiveCare(country, countryName) ||
										dataStore.todayNewRecovered(country, countryName)) && (
										<div className="data-block__ul2 card mb-4 shadow-sm">
											<div className="card-header">
												<h4 className="my-0 font-weight-normal">
													New cases today
												</h4>
											</div>
											<ul className="list-unstyled mt-3 mb-4">
												<div className="card-body">
													{dataStore.newConfirmedToday(
														country,
														countryName
													) && (
														<li className="data-block__text">
															<b>New cases confirmed today:</b>{' '}
															{dataStore.newConfirmedToday(
																country,
																countryName
															)}
														</li>
													)}
													{dataStore.todayNewDeaths(country, countryName) && (
														<li className="data-block__text">
															<b>New deaths confirmed today:</b>{' '}
															{dataStore.todayNewDeaths(country, countryName)}
														</li>
													)}
													{dataStore.todayNewTotalHospitalisedPatients(
														country,
														countryName
													) && (
														<li className="data-block__text">
															<b>New hospitalised patients today:</b>{' '}
															{dataStore.todayNewTotalHospitalisedPatients(
																country,
																countryName
															)}
														</li>
													)}
													{dataStore.todayNewIntensiveCare(
														country,
														countryName
													) && (
														<li className="data-block__text">
															<b>New intensive cares patients today:</b>{' '}
															{dataStore.todayNewIntensiveCare(
																country,
																countryName
															)}
														</li>
													)}
													{dataStore.todayNewRecovered(
														country,
														countryName
													) && (
														<li className="data-block__text">
															<b>New recovers confirmed today:</b>{' '}
															{dataStore.todayNewRecovered(
																country,
																countryName
															)}
														</li>
													)}
												</div>
											</ul>
										</div>
									)}

									<div className="data-block__ul card mb-4 shadow-sm">
										<div className="card-header">
											<h4 className="my-0 font-weight-normal">{`Information of ${dataStore.capitalize(
												countryName
											)}`}</h4>
										</div>
										<ul className="list-unstyled mt-3 mb-4">
											<div className="card-body">
												<li className="data-block__text">
													<b>Capital:</b> {dataStore.getCapital(countryInfo)}
												</li>
												<li className="data-block__text">
													<b>Population:</b>{' '}
													{dataStore.getPopulation(countryInfo)}
												</li>
												<li className="data-block__text">
													<b>Region of Europe:</b>{' '}
													{dataStore.getRegion(countryInfo)}
												</li>
												<li className="data-block__text">
													<b>Total area:</b> {dataStore.getArea(countryInfo)} km
													<sup>2</sup>
												</li>
											</div>
										</ul>
									</div>
								</section>
							}
						</section>
					</article>
					<div className="wrapper__ul wrapper__back-btn other__countries-btn">
						<Link to={'/list'}>⬅ Other Countries</Link>
					</div>
				</div>
			)}
		</>
	);
}

CountryDetails.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			countryName: PropTypes.string.isRequired
		})
	}).isRequired
};

export default CountryDetails;
