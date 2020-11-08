import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from './Header';
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

test('should header img have the src attribute', () => {
	act(() => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
			container
		);
	});
	expect(document.getElementById('header-logo').getAttribute('src')).toEqual(
		'https://trello-attachments.s3.amazonaws.com/5fa1c483b6d2a9395dba9982/200x200/806eaaf5a246a9505fa587279415712e/corona.png'
	);
});

test('should nav-desktop have 4 childs', () => {
	act(() => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
			container
		);
	});
	expect(
		document.getElementsByClassName('nav-desktop')[0].children.length
	).toBe(4);
});

test('should nav-desktop child 2 show text', () => {
	act(() => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
			container
		);
	});

	expect(
		document.getElementsByClassName('nav-desktop')[0].children[2].textContent
	).toEqual('Map');
});
