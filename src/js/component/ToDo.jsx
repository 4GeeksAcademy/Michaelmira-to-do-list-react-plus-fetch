// ToDo.jsx

import PropTypes from 'prop-types';
import React, { useState } from 'react';


function ToDoPlusCancel() {
    const [toDos, setToDos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isInputDisabled, setIsInputDisabled] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleCancel = () => {
        setInputValue("");  // this clears input
        setIsInputDisabled(false);  // Enable input on cancel
    };

    const inputStyle = {
        border: 'none',  // Remove the border
        outline: 'none',  // Remove the default focus outline
    };

    const buttonStyle = {
        border: "none",
        outline: "none,"
    };

    
    
    return (
        <div className="div row align-items-center fs-4 ">
            <div className="col-10">
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="toDoInput"></label>
                    <input 
                        id="toDoInput"
                        className='text-body-tertiary' 
                        type="text" 
                        placeholder="What needs to be done? " 
                        required 
                        style={inputStyle}
                        value={inputValue}
                        onChange={handleInputChange}
                        disabled={isInputDisabled} //Disable input if isInputDisabled is true
                    >
                    </input>
                 </form>
            </div>     
            <div className="col-2 text-right">
                <div style={{ textAlign: 'right' }}>
                    <button 
                        type="button " 
                        className="btn btn-sm btn-light text-body-tertiary"
                        id="eraseButton"
                        onClick ={handleCancel}
                        style = {buttonStyle}
                    >
                        X 
                    </button>
                </div>
            </div>
        </div>
    );
};

ToDoPlusCancel.PropTypes = {
    onCancel: PropTypes.func.isRequired,
};


export default ToDoPlusCancel

// add input values to the to dos so that everytime you 