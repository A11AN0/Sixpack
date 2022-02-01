import React from 'react';
import {shallow} from 'enzyme';
import CardBack from './CardBack';
import beers from "../../data/beers";

describe("CardBack tests", () => {
  let component;
  let testBeer;

  beforeEach(()=>{
    testBeer = beers[0]
    component = shallow(<CardBack beer={testBeer}/>);
  })

  it("should render", ()=>{
    expect(component).toBeTruthy();
  })

  it("should render the correct information, based on the beer passed in as props", ()=>{
    const {name, first_brewed, ph, tagline} = testBeer;
    expect(component.text()).toContain(name.toUpperCase());
    expect(component.text()).toContain(first_brewed);
    expect(component.text()).toContain(`${ph}`);
    expect(component.text()).toContain(tagline.toUpperCase());
  })

  it("should render the correct image", ()=>{
    const beerImage = testBeer.image_url;

    expect(component.find( "img").prop("src")).toBe(beerImage);
  })
})