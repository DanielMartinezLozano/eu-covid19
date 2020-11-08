import dispatcher from '../dispatcher/dispatcher';
import firebase from 'firebase';
import {
	signOut,
	handleSignIn,
	handleError,
	signInWithGoogle
} from './auth-actions';

jest.mock('../dispatcher/dispatcher');

describe('auth-creator', () => {
	test('should call dispatch with signOut', async () => {
		await signOut();
		expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
			type: 'AUTH_SIGNOUT'
		});
	});

	test('should call handleError with signOut', async () => {
		firebase.auth = jest.fn().mockImplementationOnce(() => {
			throw new Error();
		});
		await signOut();
		expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
			type: 'AUTH_SIGNOUT_ERROR'
		});
	});

	test('should call dispatch with handleSignIn', async () => {
		let user = { displayName: '', email: '', phoneNumber: '', photoURL: '' };
		handleSignIn(user);
		expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
			type: 'AUTH_LOGIN',
			payload: user
		});
	});
	test('should call dispatch with handleError', () => {
		let type = 'AUTH_LOGIN';
		handleError(type);
		expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
			type: 'AUTH_LOGIN'
		});
	});
	test('should call handleError with signInWithGoogle', async () => {
		firebase.auth.GoogleAuthProvider = jest.fn().mockImplementationOnce(() => {
			return {
				addScope: (str) => {
					return;
				}
			};
		});
		firebase.auth.signInWithPopup = jest.fn().mockImplementationOnce(() =>
			Promise.resolve({
				user: { displayName: '', email: '', phoneNumber: '', photoURL: '' }
			})
		);
		await signInWithGoogle();
		expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
			type: 'AUTH_LOGIN'
		});
	});
});
