// CancellButton.jsx

import PropTypes from 'prop-types';

import React from "react";

function CancellButton(props) {
    
    return (
        <div>
            <button type="button" class="btn btn-light text-body-tertiary">
                 X
            </button>
        </div>
    );
};

CancellButton.PropTypes = {
    hundredThousandsDigit: PropTypes.string,
    tenThousandsDigit: PropTypes.number,
    thousandsDigit: PropTypes.number,
    hundredsDigit: PropTypes.number,
    tensDigit: PropTypes.number,
    onesDigitDigit: PropTypes.number,

}

export default CancellButton