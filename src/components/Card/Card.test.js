import React from "react";
import Card from "./Card";
import {shallow} from "enzyme";
import beers from "../../data/beers";


describe("Card tests", () => {
  let component;
  let testBeer;

  beforeEach(()=>{
    testBeer = beers[0]
    component = shallow(<Card beer={testBeer}/>);
  })

  it("The component should render", ()=>{
    expect(component).toBeTruthy();
  })

  it("The component should have the cardfront showing by default", ()=>{
    expect(component.find("div").prop("faceDown")).toBe(false);
  })

  it("The component should toggle between cardback and cardfront when clicked ", ()=>{
    expect(component.find("div").prop("faceDown")).toBe(false);
    component.find("div").simulate("click")
    expect(component.find("div").prop("faceDown")).toBe(true);
    component.find("div").simulate("click")
    expect(component.find("div").prop("faceDown")).toBe(false);
  })
 
})
