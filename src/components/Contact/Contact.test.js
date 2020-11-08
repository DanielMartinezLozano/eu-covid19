import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import Contact from './Contact';

describe('Header', () => {
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
	test('should subheader element return text', () => {
		act(() => {
			render(<Contact />, container);
		});
		expect(document.querySelector('h2').textContent).toBe('Contact Us');
	});

	test('handleTextareaChange working fine', () => {
		act(() => {
			render(<Contact />, container);
			let buttonElement = document.getElementById('submit__btn');
			let nameInputElement = document.querySelector('#name__input');
			Simulate.change(nameInputElement, { target: { value: 'fran' } });
			Simulate.click(buttonElement);
			expect(nameInputElement.innerHTML).toBe('');
		});
	});
});
