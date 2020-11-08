import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import List from './List';
import dataStore from '../../store/data-store';

describe('List', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		act(() => {
			dataStore.setCountries(['spain', 'france']);
			render(
				<BrowserRouter>
					<List />
				</BrowserRouter>,
				container
			);
			dataStore.emitChange();
		});
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should have a Subheader', () => {
		expect(container.querySelector('.subheader')).toBeInTheDocument();
	});

	test('should display a ul', () => {
		expect(
			document.querySelector('[data-test-id="wrapper__ul"]')
		).toBeInTheDocument();
	});

	test('should have a li items', () => {
		expect(
			document.querySelector('[data-test-id="wrapper__ul"]').children.length
		).toBeGreaterThan(0);
	});
});
