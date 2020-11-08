import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
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
	test('banner should have title', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Home />
				</BrowserRouter>,
				container
			);
		});
		expect(container.querySelector('h2').textContent).toBe('EU-COVID19');
	});
	test('banner should have paragraph', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Home />
				</BrowserRouter>,
				container
			);
		});
		expect(container.querySelector('p').textContent).toBe(
			'Application for colleting and displaying Covid-19 stats in the European Union'
		);
	});
	test('should have image', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Home />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementsByClassName('image_feature')[0].src).toEqual(
			'https://trello-attachments.s3.amazonaws.com/5f9c35fdf92455054261a523/5fa1c490e3753804ca2939d5/6a5717e2b270aa1c125c45936094fb70/illustration1_three-blocks.svg'
		);
	});
	test('column_block should have 3 divs', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Home />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementsByClassName('column_block').length).toBe(3);
	});
});
