import dataStore from './data-store';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';
import MockDate from 'mockdate';

describe('dataStore', () => {
	test('should create', () => {
		expect(dataStore).toBeDefined();
	});

	test('should call getCountries and return an array of countries', () => {
		const countries = ['france', 'italy'];
		dataStore.setCountries(countries);
		expect(dataStore.getCountries()).toEqual(countries);
	});

	test('should call getCountry and return a country', () => {
		const country = { name: 'France' };
		dataStore.setCountry(country);
		expect(dataStore.getCountry()).toEqual(country);
	});

	test('should call capitalize and return an string with the first position toUpperCase', () => {
		expect(dataStore.capitalize('france')).toEqual('France');
	});

	test('should call emitChange', () => {
		expect(dataStore.emitChange()).toEqual();
	});

	test('should call addEventListener', () => {
		function handleChanges() {
			dataStore.getCountries();
		}
		expect(dataStore.addEventListener(handleChanges)).toEqual();
	});

	test('should call removeEventListener', () => {
		function handleChanges() {
			dataStore.getCountry();
		}
		expect(dataStore.removeEventListener(handleChanges)).toEqual();
	});

	test('should register LOAD_COUNTRIES', () => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_COUNTRIES,
			payload: ['hola']
		});

		const countries = dataStore.getCountries();
		expect(countries).toEqual(['hola']);
	});

	test('should register LOAD_COUNTRY', () => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_COUNTRY,
			payload: 'france'
		});

		const country = dataStore.getCountry();
		expect(country).toEqual('france');
	});

	test('should register LOAD_COUNTRY_INFO', () => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_COUNTRY_INFO,
			payload: []
		});

		const countryInfo = dataStore.getCountryInfo();
		expect(countryInfo).toEqual([]);
	});

	test('Should default', () => {
		dispatcher.dispatch({
			type: '',
			payload: ''
		});
		expect('default').toEqual('default');
	});

	test('should call thousandsSeparator and return a string', () => {
		let number = 123456;
		const response = dataStore.thousandsSeparator(number);
		expect(response).toBe('123.456');
	});

	describe('getDataObject', () => {
		beforeEach(() => {
			MockDate.set('2020-11-01');
		});
		const countryName = 'france';
		const country = {
			country: {
				dates: {
					'2020-11-01': {
						countries: {
							France: {
								today_confirmed: 123456,
								today_deaths: 123456,
								today_intensive_care: 123456,
								today_new_confirmed: 2,
								today_new_deaths: 2,
								today_new_intensive_care: 2,
								today_new_recovered: 2,
								today_new_total_hospitalised_patients: 2,
								today_recovered: 2,
								today_total_hospitalised_patients: 2,
								today_open_cases: 123456
							}
						}
					}
				},
				total: { date: '2020-11-01' }
			}
		};
		test('should call getDataObject and return an object', () => {
			expect(dataStore.getDataObject(country, countryName)).toEqual({
				today_confirmed: 123456,
				today_deaths: 123456,
				today_intensive_care: 123456,
				today_new_confirmed: 2,
				today_new_deaths: 2,
				today_new_intensive_care: 2,
				today_new_recovered: 2,
				today_new_total_hospitalised_patients: 2,
				today_recovered: 2,
				today_total_hospitalised_patients: 2,
				today_open_cases: 123456
			});
		});
	});

	describe('COVID Data', () => {
		const countryName = 'france';
		const country = {
			country: {
				dates: {
					'2020-11-01': {
						countries: {
							France: {
								today_confirmed: 123456,
								today_deaths: 123456,
								today_intensive_care: 123456,
								today_new_confirmed: 2,
								today_new_deaths: 2,
								today_new_intensive_care: 2,
								today_new_recovered: 2,
								today_new_total_hospitalised_patients: 2,
								today_recovered: 2,
								today_total_hospitalised_patients: 2,
								today_open_cases: 123456
							}
						}
					}
				},
				total: { date: '2020-11-01' }
			}
		};

		beforeEach(() => {
			dataStore.getDataObject = jest.fn().mockReturnValueOnce({
				today_confirmed: 123456,
				today_deaths: 123456,
				today_intensive_care: 123456,
				today_new_confirmed: 2,
				today_new_deaths: 2,
				today_new_intensive_care: 2,
				today_new_recovered: 2,
				today_new_total_hospitalised_patients: 2,
				today_recovered: 2,
				today_total_hospitalised_patients: 2,
				today_open_cases: 123456
			});
			dataStore.getCountryInfo = jest.fn().mockReturnValueOnce([
				{
					population: 200000
				}
			]);
		});

		test('should call todayConfirmed and return a number', () => {
			expect(dataStore.todayConfirmed(country, countryName)).toEqual('123.456');
		});

		test('should call todayDeaths and return a string', () => {
			const response = dataStore.todayDeaths(country, countryName);
			expect(response).toBe('123.456');
		});
		test('should call todayIntensiveCare and return a string', () => {
			const response = dataStore.todayIntensiveCare(country, countryName);
			expect(response).toBe('123.456');
		});
		test('should call newConfirmedToday and return a string', () => {
			const response = dataStore.newConfirmedToday(country, countryName);
			expect(response).toBe('2');
		});
		test('should call todayNewDeaths and return a string', () => {
			const response = dataStore.todayNewDeaths(country, countryName);
			expect(response).toBe('2');
		});
		test('should call todayNewIntensiveCare and return a string', () => {
			const response = dataStore.todayNewIntensiveCare(country, countryName);
			expect(response).toBe('2');
		});
		test('should call todayNewRecovered and return a string', () => {
			const response = dataStore.todayNewRecovered(country, countryName);
			expect(response).toBe('2');
		});
		test('should call todayNewTotalHospitalisedPatients and return a string', () => {
			const response = dataStore.todayNewTotalHospitalisedPatients(
				country,
				countryName
			);
			expect(response).toBe('2');
		});
		test('should call todayRecovered and return a string', () => {
			const response = dataStore.todayRecovered(country, countryName);
			expect(response).toBe('2');
		});
		test('should call todayTotalHospitalisedPatients and return a string', () => {
			const response = dataStore.todayTotalHospitalisedPatients(
				country,
				countryName
			);
			expect(response).toBe('2');
		});
		test('should call todayOpenCases and return a string', () => {
			const response = dataStore.todayOpenCases(country, countryName);
			expect(response).toBe('123.456');
		});
		test('should call casesPerHundredThousand and return a string', () => {
			const response = dataStore.casesPerHundredThousand(country, countryName);
			expect(response).toBe('61.728');
		});
	});

	describe('countryInfo', () => {
		test('should call getCountryInfo and return an object', () => {
			dataStore.getCountryInfo = jest.fn().mockReturnValueOnce([
				{
					population: 200000
				}
			]);
			const countryInfo = [{ population: 200000 }];
			dataStore.setCountryInfo(countryInfo);
			expect(dataStore.getCountryInfo()).toEqual(countryInfo);
		});
		test('should call getPopulation and return a string', () => {
			const countryInfo = [{ population: 123456 }];
			const response = dataStore.getPopulation(countryInfo);
			expect(response).toBe('123.456');
		});
		test('should call getRegion and return a string', () => {
			const countryInfo = [{ subregion: '' }];
			const response = dataStore.getRegion(countryInfo);
			expect(response).toBe('');
		});
		test('should call getArea and return a string', () => {
			const countryInfo = [{ area: '' }];
			const response = dataStore.getArea(countryInfo);
			expect(response).toBe('');
		});
		test('should call getCapital and return a string', () => {
			const countryInfo = [{ capital: '' }];
			const response = dataStore.getCapital(countryInfo);
			expect(response).toBe('');
		});
		test('should call getFlag and return a string', () => {
			const countryInfo = [{ flag: '' }];
			const response = dataStore.getFlag(countryInfo);
			expect(response).toBe('');
		});
	});
});
