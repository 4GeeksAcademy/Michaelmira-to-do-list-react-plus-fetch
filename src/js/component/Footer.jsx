Footer.jsx

import PropTypes from 'prop-types';

import React from "react";

function Footer(props) {
    
    return (
        <div>
            <div className="card-footer text-left text-body-secondary">
            X items left
            </div>
        </div>
    );
};

Footer.propTypes = {
    hundredThousandsDigit: PropTypes.string,
    tenThousandsDigit: PropTypes.number,
    thousandsDigit: PropTypes.number,
    hundredsDigit: PropTypes.number,
    tensDigit: PropTypes.number,
    onesDigitDigit: PropTypes.number,

}

export default Footer