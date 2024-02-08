// ToDo.jsx

import PropTypes from 'prop-types';

import React, { useState } from 'react';

function ToDo(props) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted Value", inputValue);
    };

    const inputStyle = {
        border: 'none',  // Remove the border
        outline: 'none',  // Remove the default focus outline
    };
    
    return (
        <div >
            <form onSubmit= {handleFormSubmit}>
                <label for="name"></label>
                <input 
                className='text-body-tertiary' 
                type="text" 
                placeholder="What needs to be done? " 
                required 
                style={inputStyle}
                value={inputValue}
                onChange={handleInputChange}></input>
            </form>
        </div>
    );
};

ToDo.PropTypes = {
    inputStick: PropTypes.string,
    tenThousandsDigit: PropTypes.number,
    thousandsDigit: PropTypes.number,
    hundredsDigit: PropTypes.number,
    tensDigit: PropTypes.number,
    onesDigitDigit: PropTypes.number,

}

export default ToDo