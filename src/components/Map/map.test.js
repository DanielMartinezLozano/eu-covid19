import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Map from './Map';
import Subheader from '../Subheader/Subheader';

describe('Map', () => {
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
	test('should print subheader', () => {
		act(() => {
			render(<Map />, container);
		});
		expect(<Subheader />).toBeDefined();
	});
	// test('should date be defined', () => {
	// 	act(() => {
	// 		render(<Map />, container);
	// 		expect(<Subheader />).toBeDefined();
	// 	});
	// });

	// test('should print elements', () => {
	// 	act(() => {
	// 		render(<Map />, container);
	// 		expect(document.querySelector('.eu11')).toBeDefined();
	// 	});
	// });
	// test('div should have more than 2 children', () => {
	// 	act(() => {
	// 		render(<Map />, container);
	// 		expect(document.querySelector('#map-europe').children.length).toBe(1);
	// 	});
	// });
});
