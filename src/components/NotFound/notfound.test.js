import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound', () => {
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
					<NotFound history={{ push: () => '' }} />
				</BrowserRouter>,
				container
			);
		});
		expect(container.querySelector('subheader')).toBeDefined();
	});
	test('should contain button', () => {
		act(() => {
			render(
				<BrowserRouter>
					<NotFound history={{ push: () => '' }} />
				</BrowserRouter>,
				container
			);
		});
		expect(container.querySelector('button')).toBeTruthy();
	});
	test('should contain an image', () => {
		act(() => {
			render(
				<BrowserRouter>
					<NotFound history={{ push: () => '' }} />
				</BrowserRouter>,
				container
			);
		});
		expect(container.querySelector('img')).toBeTruthy();
	});
	test('button test', () => {
		act(() => {
			render(
				<BrowserRouter>
					<NotFound history={{ push: () => '' }} />
				</BrowserRouter>,
				container
			);
			let documentElement = document.querySelector('.banner-btn');
			documentElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			expect(documentElement.props.history.push('/')).toBeCalled();
		});
	});
});
