import axios from 'axios';
import dispatcher from '../dispatcher/dispatcher';
import {
	loadCountries,
	loadCountryInfo,
	loadCountry,
	loadCountryHistoryData,
	clearInfectedCasesFromStore
} from './actions-creator';

jest.mock('axios');
jest.mock('../dispatcher/dispatcher');

describe('actions-creator', () => {
	beforeEach(async () => {
		axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
	});
	describe('eu-countries api', () => {
		test('should call dispatch with loadCountries', async () => {
			await loadCountries();
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: 'LOAD_COUNTRIES',
				payload: []
			});
		});
	});
	describe('eu-country api', () => {
		test('should call dispatch with loadCountries', async () => {
			await loadCountry();
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: 'LOAD_COUNTRY',
				payload: { country: [], countryName: undefined }
			});
		});
	});

	describe('country-info api', () => {
		test('should call dispatch with loadCountryInfo', async () => {
			await loadCountryInfo();
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: 'LOAD_COUNTRY_INFO',
				payload: []
			});
		});
	});

	describe('country-czechia api', () => {
		test('should call dispatch with loadCountryInfo', async () => {
			axios.mockImplementationOnce(() => Promise.resolve({ data: [] }));
			await loadCountryInfo('czechia');
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: 'LOAD_COUNTRY_INFO',
				payload: []
			});
		});
	});
	describe('loadCountryHistoryData from api', () => {
		test('should call dispatch with loadCountryHistoryData', async () => {
			await loadCountryHistoryData();
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: 'LOAD_COUNTRY_HISTORY_DATA',
				payload: { countryHistoryData: [], countryName: undefined }
			});
		});
	});
	describe('clearInfectedCasesFromStore from api', () => {
		test('should call dispatch with clearInfectedCasesFromStore', () => {
			clearInfectedCasesFromStore();
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: 'CLEAR_INFECTED_CASES'
			});
		});
	});
});
