import React from "react";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

import Products from "../products/Products";


afterEach(cleanup);

it('render when there is no item', () => {
    const tree = renderer.create(<Products />).toJSON();
    expect(tree).toMatchSnapshot();
})

it('render when there is one item', () => {
    const tree = renderer.create(<Products items={['Apple']}/>).toJSON();
    expect(tree).toMatchSnapshot();
})


it('render when there are multiple items', () => {
    const tree = renderer.create(<Products items={['Apple', 'Mango', 'Banana']}/>).toJSON();
    expect(tree).toMatchSnapshot();
})