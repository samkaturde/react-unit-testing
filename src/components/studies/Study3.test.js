import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@testing-library/react";

import Study3 from "../studies/Study3";


jest.mock('../studies/Study1', () => () => <div id='mocStudy1'>Hallo Moc Study1</div>)
jest.mock('../studies/Study2', () => () => <div id='mocStudy2'>Hallo Moc Study2</div>)


afterEach(cleanup);

describe('mock component test', () => {
    test('mock component test',() => {
        const { container } = render(<Study3 />)
        const mocStudy1 = container.querySelector('div#mocStudy1');
        const mocStudy2 = container.querySelector('div#mocStudy2');

        expect(mocStudy1).toBeInTheDocument();
        expect(mocStudy2).toBeInTheDocument();

    })
})