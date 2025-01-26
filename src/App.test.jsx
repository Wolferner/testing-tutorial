import { fireEvent, render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import App from './App';

describe('App component', () => {
	test('render components', () => {
		render(<App />);

		const helloWorldElem = screen.getByText(/hello world!/i);
		const btn = screen.getByRole('button');
		const input = screen.getByPlaceholderText(/Type something here/i);

		expect(helloWorldElem).toBeInTheDocument();
		expect(btn).toBeInTheDocument();
		expect(input).toBeInTheDocument().toMatchSnapshot();

		// screen.debug();
	});

	test('looking of unreal text', () => {
		render(<App />);
		const helloWorldElem = screen.queryByText(/maksim/i);
		expect(helloWorldElem).toBeNull();
	});

	test('waiting async text and style test', async () => {
		render(<App />);
		const zigElement = await screen.findByText(/zig/i);
		expect(zigElement).toBeInTheDocument();
		expect(zigElement).toHaveStyle({ color: 'rgb(255, 0, 0)' });
	});

	test('waiting async text and style test', async () => {
		render(<App />);
		const btn = screen.getByTestId('toggle-btn');

		expect(screen.queryByTestId('toggle-div')).toBeNull();
		fireEvent.click(btn);
		expect(screen.queryByTestId('toggle-div')).toBeInTheDocument();
	});
});
