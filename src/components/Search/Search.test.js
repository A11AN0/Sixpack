import React from "react";
import Search from "./Search";
import { shallow } from 'enzyme';

describe("Search tests", () => {
  let component;

  
  beforeEach(() => {
    component = shallow(<Search />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('should only one component (searchbar) by default ', () => {
    expect(component.find('div').prop('displayFilter')).toBe(false);
    expect(component.find('div').children().length).toBe(1);
  })

 
});
