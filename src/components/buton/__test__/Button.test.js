import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

import Button from "../Button";


afterEach(cleanup);

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button></Button>, div);
});

// it('renders button correctly', () => {
//     const { getByTestId } = render(<button label='click me please' />)
//     console.log(" queryByTestId('button') >>>>> ", getByTestId('button1'))
//     // expect(queryByTestId('button')).toHaveTextContent('click me please')
// });

it('matches snapshot', ()=>{
    const tree = renderer.create(<Button label='save'></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})