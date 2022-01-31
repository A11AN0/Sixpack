import React from 'react';
import ReactDOM from 'react-dom';
import CardFront from './CardFront';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardFront />, div);
  ReactDOM.unmountComponentAtNode(div);
});