import React from 'react';
import ReactDOM from 'react-dom';
import FormFeedback from '../FormFeedback';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormFeedback />, div);
});

it('should renders correctly', () => {
  const tree = renderer.create(<FormFeedback />).toJSON();
  expect(tree).toMatchSnapshot();
});