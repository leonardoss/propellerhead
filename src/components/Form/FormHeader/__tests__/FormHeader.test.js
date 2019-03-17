import React from 'react';
import ReactDOM from 'react-dom';
import FormHeader from '../FormHeader';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormHeader />, div);
});

it('should renders correctly', () => {
  const tree = renderer.create(<FormHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});