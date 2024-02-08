// ToDo.jsx

import PropTypes from 'prop-types';

import React from "react";

function ToDo(props) {
    const inputStyle = {
        border: 'none',  // Remove the border
        outline: 'none',  // Remove the default focus outline
    }
    
    return (
        <div className="border w-100">
            <form action="/submit" method="post">
                <label for="name"></label>
                <input type="text" placeholder="What needs to be done? ? " required style={inputStyle}  ></input>
            </form>
        </div>
    );
};

ToDo.PropTypes = {
    hundredThousandsDigit: PropTypes.string,
    tenThousandsDigit: PropTypes.number,
    thousandsDigit: PropTypes.number,
    hundredsDigit: PropTypes.number,
    tensDigit: PropTypes.number,
    onesDigitDigit: PropTypes.number,

}

export default ToDo