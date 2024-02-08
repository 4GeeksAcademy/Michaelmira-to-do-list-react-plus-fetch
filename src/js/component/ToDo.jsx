// ToDo.jsx

import PropTypes from 'prop-types';

import React, { useState } from 'react';

import CancellButton from './CancellButton';


function ToDo(props) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            console.log("Submitted Value", inputValue);
        }
    };

    const handleCancel = () => {
        setInputValue("");
    }

    const inputStyle = {
        border: 'none',  // Remove the border
        outline: 'none',  // Remove the default focus outline
    };
    
    return (
        <div >
            <form onKeyDown={handleFormSubmit}>
                <label for="name"></label>
                <input 
                id="toDoInput"
                className='text-body-tertiary' 
                type="text" 
                placeholder="What needs to be done? " 
                required 
                style={inputStyle}
                value={inputValue}
                onChange={handleInputChange}>
                </input>
                <CancellButton onCancel={handleCancel} />
            </form>
        </div>
    );
};


export default ToDo