import React from 'react';
import ReactDOM from 'react-dom';
import CardBack from './CardBack';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardBack />, div);
  ReactDOM.unmountComponentAtNode(div);
});