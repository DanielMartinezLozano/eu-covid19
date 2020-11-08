import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import Search from './Search';
import { BrowserRouter } from 'react-router-dom';
import * as actions from '../../../actions/actions-creator';

let container = null;
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

xtest('should dropdown_wrapper print the list', () => {
	act(() => {
		render(
			<BrowserRouter>
				<Search />
			</BrowserRouter>,
			container
		);
	});
	expect(
		document.getElementsByClassName('dropdown_wrapper')[0]
	).toBeInTheDocument();
});
test('should filterCountriesByName have been called at least once', () => {
	const event = {
		preventDefault: () => {},
		target: { value: { toLowerCase: () => {} } }
	};

	act(() => {
		actions.filterCountriesByName = jest.fn();
		render(
			<BrowserRouter>
				<Search />
			</BrowserRouter>,
			container
		);
		let inputElement = document.getElementById('inputSearch');
		Simulate.keyUp(inputElement, event);
	});
	expect(actions.filterCountriesByName.mock.calls[0][0]).toBe(null);
});
