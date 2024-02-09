// ToDo.jsx

import PropTypes from 'prop-types';
import React, { useState } from 'react';


function ToDoPlusCancel() {
    const [toDos, setToDos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        if (event.key === "Enter") {
            setToDos((prevToDos) => [...prevToDos, inputValue]);
            console.log("Submitted Value", inputValue);
            // event.preventDefault();
            setInputValue("");  //Clear input after submission
        }
    };

    const handleCancel = () => {
        setInputValue("");  // this clears input
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
                <form onKeyDown={handleFormSubmit}>
                    <label htmlFor="toDoInput"></label>
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