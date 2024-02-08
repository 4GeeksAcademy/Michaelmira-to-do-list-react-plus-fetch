// CancellButton.jsx

import PropTypes from 'prop-types';

import React from "react";

function CancellButton(props) {
    
    return (
        <div>
            <button type="button " 
                className="btn btn-sm btn-light text-body-tertiary"
                id="eraseButton"
                onClick= {props.onCancel} 
            >
                 X
            </button>
        </div>
    );
};

CancellButton.propTypes = {
    onCancel: PropTypes.func.isRequired,
    tenThousandsDigit: PropTypes.number,
}

export default CancellButton