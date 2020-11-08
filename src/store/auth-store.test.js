import authStore from './auth-store';

jest.mock('events');

describe('class AuthStore', () => {
	test('getUser should return undefined', () => {
		let response = authStore.getUser();
		expect(response).toBe(undefined);
	});
});
