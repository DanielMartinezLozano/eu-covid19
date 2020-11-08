import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import CountryDetails from './CountryDetails';

describe('CountryDetails', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		act(() => {
			render(
				<BrowserRouter>
					<CountryDetails match={{ params: { countryName: 'france' } }} />
				</BrowserRouter>,
				container
			);
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
});
