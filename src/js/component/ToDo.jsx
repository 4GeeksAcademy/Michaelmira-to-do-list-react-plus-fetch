ToDo.jsx

import PropTypes from 'prop-types';

import React from "react";

function ToDo(props) {
    
    return (
            <form action="/submit" method="post">
                <label for="name"></label>
                <input type="text" id="name" name="name" placeholder="What needs to be done?" required></input>
            </form>
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