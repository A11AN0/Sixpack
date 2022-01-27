import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

describe('<Filter />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Filter />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
