import React from "react";
import Filter from "./Filter";
import {shallow} from "enzyme";



describe("Filter tests", () => {
  let component;
  let mockFn;

  beforeEach(()=>{
    mockFn = jest.fn();
    component = shallow(<Filter determineBeerSelection={mockFn}/>)
  })

  it("The Filter should render", ()=>{
    expect(component).toBeTruthy();
  })

  it("When clicked, all filters should call determineBeerSelection()", ()=>{
    component.find("input").at(0).simulate("input")
    expect(mockFn).toHaveBeenCalled();

    component.find("input").at(1).simulate("input")
    expect(mockFn).toHaveBeenCalled();

    component.find("input").at(2).simulate("input")
    expect(mockFn).toHaveBeenCalled();
  })
 
})
