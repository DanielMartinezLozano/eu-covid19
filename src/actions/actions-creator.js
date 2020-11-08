import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';
import axios from 'axios';

export async function loadCountries() {
	const countries = await axios('/api/eu-countries.json');

	dispatcher.dispatch({
		type: actionTypes.LOAD_COUNTRIES,
		payload: countries.data
	});
}

export async function loadCountry(countryName) {
	let date;
	let count = 0;

	let keepTry = true;
	while (keepTry) {
		try {
			date = new Date();
			date.setDate(date.getDate() - count);
			var dd = String(date.getDate()).padStart(2, '0');
			var mm = String(date.getMonth() + 1).padStart(2, '0');
			var yyyy = date.getFullYear();
			date = `${yyyy}-${mm}-${dd}`;
			let country = await axios(
				`https://api.covid19tracking.narrativa.com/api/${date}/country/${countryName}`
			);

			if (!country.error) {
				country = country.data;
				keepTry = false;
				dispatcher.dispatch({
					type: actionTypes.LOAD_COUNTRY,
					payload: { country, countryName }
				});
			}

			count = count - 1;
		} catch (error) {
			throw console.log('Data has not been found');
		}
	}
}

export async function loadCountryInfo(countryName) {
	try {
		if (countryName === 'czechia') {
			countryName = 'cze';
		}
		const countryInfo = await axios(
			`https://restcountries.eu/rest/v2/name/${countryName}`
		);

		dispatcher.dispatch({
			type: actionTypes.LOAD_COUNTRY_INFO,
			payload: countryInfo.data
		});
	} catch (error) {
		throw console.log(
			`There has been an error fetching the information about ${countryName}`
		);
	}
}

export function filterCountriesByName(inputValue) {
	dispatcher.dispatch({
		type: actionTypes.FILTER_COUNTRIES,
		payload: inputValue
	});
}

export async function loadCountryHistoryData(countryName) {
	let firstDate = getToday();
	let secondDate = getMonthDay();

	function getToday() {
		let date = new Date();
		date.setDate(date.getDate());
		var dd = String(date.getDate()).padStart(2, '0');
		var mm = String(date.getMonth() + 1).padStart(2, '0');
		var yyyy = date.getFullYear();
		date = `${yyyy}-${mm}-${dd}`;
		return date;
	}

	function getMonthDay() {
		let secondDay = new Date();
		secondDay.setMonth(secondDay.getMonth() - 1);
		var dd = String(secondDay.getDate()).padStart(2, '0');
		var mm = String(secondDay.getMonth() + 1).padStart(2, '0');
		var yyyy = secondDay.getFullYear();
		secondDay = `${yyyy}-${mm}-${dd}`;
		return secondDay;
	}
	const countryHistoryData = await axios(
		`https://api.covid19tracking.narrativa.com/api/country/${countryName}?date_from=${secondDate}&date_to=${firstDate}`
	);

	dispatcher.dispatch({
		type: actionTypes.LOAD_COUNTRY_HISTORY_DATA,
		payload: { countryHistoryData: countryHistoryData.data, countryName }
	});
}

export function clearInfectedCasesFromStore() {
	dispatcher.dispatch({
		type: actionTypes.CLEAR_INFECTED_CASES
	});
}
