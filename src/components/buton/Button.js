/* eslint-disable no-unreachable */
import React from "react";

import  "./button.css";

function Button ({label}){
    // const { label } = props;
    return <div data-testid='button' className='button-style'>{label} </div>
}

export default Button
