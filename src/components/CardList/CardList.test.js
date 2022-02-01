import React from "react";
import CardList from "./CardList";
import Card from "../Card";
import {shallow} from "enzyme";
import beers from "../../data/beers";

describe("CardList tests", () => {
  let component;

  beforeEach(()=>{
    component = shallow(<CardList beers={beers}/>);
  })

  it("should render", ()=>{
    expect(component).toBeTruthy();
  })

  it("should render the correct number of card components", () => {
    const numberOfRecipes = beers.length;
    const numberOfRenderedCards = component.find(Card).length;

    expect(numberOfRecipes).toEqual(numberOfRenderedCards);
  })
})
