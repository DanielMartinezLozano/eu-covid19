import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

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

test('should element img have alt attribute', () => {
	act(() => {
		render(
			<BrowserRouter>
				<Footer />
			</BrowserRouter>,
			container
		);
	});
	expect(
		document.getElementsByClassName('logo_image')[0].getAttribute('alt')
	).toEqual('logo');
});

test('should have the element div with className footer_text a p child', () => {
	act(() => {
		render(
			<BrowserRouter>
				<Footer />
			</BrowserRouter>,
			container
		);
	});
	expect(
		document.getElementsByClassName('footer_text')[0].children.length
	).toBe(1);
});

test('should return the number of p elements', () => {
	act(() => {
		render(
			<BrowserRouter>
				<Footer />
			</BrowserRouter>,
			container
		);
	});
	expect(document.getElementsByClassName('logo_title')[0].children.length).toBe(
		2
	);
});

test('should return the text of the secons p element', () => {
	act(() => {
		render(
			<BrowserRouter>
				<Footer />
			</BrowserRouter>,
			container
		);
	});
	expect(
		document.getElementsByClassName('footer_text')[0].children[0].textContent
	).toBe('Copyright © 2020 CoTeam, Inc. Built with React Flux.');
});
