import actionTypes from '../actions/action-types';
import dispatcher from '../dispatcher/dispatcher';
import { EventEmitter } from 'events';
import { loadCountryInfo } from '../actions/actions-creator';

const CHANGE = 'CHANGE';
let countries = [];
let country;
let countryInfo;
let filteredCountries = null;
//let infectedCasesOfMonth = null;

export class DataStore extends EventEmitter {
	addEventListener(callback) {
		this.on(CHANGE, callback);
	}

	removeEventListener(callback) {
		this.removeListener(CHANGE, callback);
	}

	emitChange() {
		this.emit(CHANGE);
	}

	getCountries() {
		return countries;
	}

	setCountries(value) {
		countries = value;
	}

	getCountry() {
		return country;
	}

	setCountry(value) {
		country = value;
	}

	capitalize(string) {
		const name = string[0].toUpperCase() + string.slice(1);
		return name;
	}

	getDataObject(country, countryName) {
		let today = new Date();
		today.setDate(today.getDate());
		let dd = String(today.getDate()).padStart(2, '0');
		let mm = String(today.getMonth() + 1).padStart(2, '0');
		let yyyy = today.getFullYear();

		today = yyyy + '-' + mm + '-' + dd;

		return country.country.dates[today].countries[this.capitalize(countryName)];
	}

	todayConfirmed(country, countryName) {
		let data = this.getDataObject(country, countryName);
		let value = data.today_confirmed;
		return value ? this.thousandsSeparator(data.today_confirmed) : null;
	}

	todayDeaths(country, countryName) {
		let data = this.getDataObject(country, countryName);
		let value = data.today_deaths;
		return value ? this.thousandsSeparator(data.today_deaths) : null;
	}

	todayTotalHospitalisedPatients(country, countryName) {
		let data = this.getDataObject(country, countryName);
		let value = data.today_total_hospitalised_patients;
		return value
			? this.thousandsSeparator(data.today_total_hospitalised_patients)
			: null;
	}

	todayIntensiveCare(country, countryName) {
		let data = this.getDataObject(country, countryName);
		let value = data.today_intensive_care;
		return value ? this.thousandsSeparator(data.today_intensive_care) : null;
	}

	todayRecovered(country, countryName) {
		let data = this.getDataObject(country, countryName);
		let value = data.today_recovered;
		return value ? this.thousandsSeparator(data.today_recovered) : null;
	}

	newConfirmedToday(country, countryName) {
		let data = this.getDataObject(country, countryName);
		let value = data.today_new_confirmed;
		return value ? this.thousandsSeparator(data.today_new_confirmed) : null;
	}

	todayNewDeaths(country, countryName) {
		let data = this.getDataObject(country, countryName);
		let value = data.today_new_deaths;
		return value ? this.thousandsSeparator(data.today_new_deaths) : null;
	}

	todayNewTotalHospitalisedPatients(country, countryName) {
		let data = this.getDataObject(country, countryName);
		let value = data.today_new_total_hospitalised_patients;
		return value
			? this.thousandsSeparator(data.today_new_total_hospitalised_patients)
			: null;
	}

	todayNewIntensiveCare(country, countryName) {
		let data = this.getDataObject(country, countryName);
		let value = data.today_new_intensive_care;
		return value
			? this.thousandsSeparator(data.today_new_intensive_care)
			: null;
	}

	todayNewRecovered(country, countryName) {
		let data = this.getDataObject(country, countryName);
		let value = data.today_new_recovered;
		return value ? this.thousandsSeparator(data.today_new_recovered) : null;
	}

	todayOpenCases(country, countryName) {
		let data = this.getDataObject(country, countryName);
		let value = data.today_open_cases;
		return value ? this.thousandsSeparator(data.today_open_cases) : null;
	}

	casesPerHundredThousand(country, countryName) {
		countryInfo = this.getCountryInfo();
		if (this.getPopulation(countryInfo)) {
			let population = this.getPopulation(countryInfo).replace(/\./g, '');
			let openCases = this.todayOpenCases(country, countryName).replace(
				/\./g,
				''
			);
			let response = (+openCases * 100000) / +population;
			response = response.toFixed(0);
			response = response.toString().replace('.', ',');
			return openCases ? this.thousandsSeparator(response) : null;
		}
	}

	thousandsSeparator(number) {
		return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
	}

	getCountryInfo() {
		return countryInfo;
	}

	setCountryInfo(value) {
		countryInfo = value;
	}

	getPopulation(countryInfo) {
		return countryInfo && this.thousandsSeparator(countryInfo[0].population);
	}

	getRegion(countryInfo) {
		return countryInfo && countryInfo[0].subregion;
	}

	getArea(countryInfo) {
		return countryInfo && this.thousandsSeparator(countryInfo[0].area);
	}

	getCapital(countryInfo) {
		return countryInfo && countryInfo[0].capital;
	}

	getFlag(countryInfo) {
		return countryInfo && countryInfo[0].flag;
	}

	getFilteredCountries() {
		return filteredCountries;
	}

	/* GRAPH FUNCTIONS:

	getCountryData() {
		return countryData;
	}

	setCountryData(data) {
		countryData = data;
	}
	 	getInfectedCases(countryData, countryName) {
		const countryDataArray = [];
		for (let index in countryData) {
			countryDataArray.push(countryData[index]);
		}
		const allDays = countryDataArray[0];

		const newDays = {};
		for (let property in allDays) {
			newDays[property] =
				allDays[property].countries[countryName]?.today_new_confirmed;
		}

		const daysValue = [];

		for (let value in newDays) {
			daysValue.push(newDays[value]);
		}

		return daysValue;
	}

	getInfectedCasesOfMonth() {
		return infectedCasesOfMonth;
	} */
}

const dataStore = new DataStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_COUNTRIES:
			dataStore.setCountries(action.payload);
			dataStore.emitChange();
			break;

		case actionTypes.LOAD_COUNTRY:
			dataStore.setCountry(action.payload);
			loadCountryInfo(action.payload.countryName);
			break;

		case actionTypes.LOAD_COUNTRY_INFO:
			countryInfo = action.payload;
			dataStore.emitChange();
			break;
		case actionTypes.FILTER_COUNTRIES:
			filteredCountries = countries.filter((country) => {
				return country.toLowerCase().includes(action.payload);
			});
			dataStore.emitChange();
			break;

		/* case actionTypes.LOAD_COUNTRY_HISTORY_DATA:
			dataStore.setCountryData(action.payload);
			infectedCasesOfMonth = dataStore.getInfectedCases(
				action.payload.countryHistoryData,
				dataStore.capitalize(action.payload.countryName)
			);
			dataStore.emitChange();
			break;

		case actionTypes.CLEAR_INFECTED_CASES:
			infectedCasesOfMonth = null;
			break; */
		default:
			break;
	}
});

export default dataStore;
