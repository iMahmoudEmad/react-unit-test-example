import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Button></Button>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
	const { getByTestId } = render(<Button label='click me please' />);
	expect(getByTestId('button')).toHaveTextContent('click me please');
});

it('renders without crashing', () => {
	const { getByTestId } = render(<Button label='save' />);
	expect(getByTestId('button')).toHaveTextContent('save');
});

it('matches snapshot first', () => {
	const tree = renderer.create(<Button label='save' />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('matches snapshot second', () => {
	const tree = renderer.create(<Button label='click me snap' />).toJSON();
	expect(tree).toMatchSnapshot();
});
