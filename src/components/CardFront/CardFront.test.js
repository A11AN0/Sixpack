import React from 'react';
import {shallow} from 'enzyme';
import CardFront from './CardFront';
import beers from "../../data/beers";

describe("CardFront tests", () => {
  let component;
  let testBeer;

  beforeEach(()=>{
    testBeer = beers[0]
    component = shallow(<CardFront beer={testBeer}/>);
  })

  it("should render", ()=>{
    expect(component).toBeTruthy();
  })

  it("should render the correct name based on the recipe passed in as props", ()=>{
    const beerName = testBeer.name;
    expect(component.text()).toContain(beerName.toUpperCase());
  })

  it("should render the correct image", ()=>{
    const beerImage = testBeer.image_url;

    expect(component.find( "img").prop("src")).toBe(beerImage);
  })
})