import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Faqs from './Faqs';

describe('Faqs', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});
	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});
	test('should render subheader component', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Faqs></Faqs>
				</BrowserRouter>,
				container
			);
		});
		expect(container.querySelector('subheader')).toBeDefined();
	});
	test('should have 4 questions', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Faqs></Faqs>
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementsByClassName('list-group-item').length).toBe(4);
	});
	test('should have 4 divs', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Faqs></Faqs>
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementsByClassName('tab-pane').length).toBe(4);
	});
});
