import React from 'react';
import {shallow} from 'enzyme';
import SearchBar from './SearchBar';


describe("SearchBar tests", () => {
  let component;
  let mockFn;

  beforeEach(()=>{
    mockFn = jest.fn();
    component = shallow(<SearchBar optimizeBeerSelection={mockFn} determineBeerSelection={mockFn} setDisplayFilter={mockFn}/>);
  })

  it("should render", ()=>{
    expect(component).toBeTruthy();
  })

  it("should call the parent function 'optimizeBeerSelection' on user input", ()=>{
    component.find("input").simulate("input", {target: {value: "User input"}} )
    expect(mockFn).toHaveBeenCalled();
  })

  it("When the filter svg symbol is clicked, the toggleFilter() function should be called", ()=>{
    expect(component.find('path').prop('fill')).toBe('black')
    component.find('svg').simulate('click')
    expect(component.find('path').prop('fill')).toBe('green')
    component.find('svg').simulate('click')
    expect(component.find('path').prop('fill')).toBe('black') 
  })
  
})