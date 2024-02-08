Footer.jsx

import PropTypes from 'prop-types';

import React from "react";

function Footer(props) {
    
    return (
        <div>
            <div class="card-footer text-left text-body-secondary">
            2 days ago
            </div>
        </div>
    );
};

Footer.PropTypes = {
    hundredThousandsDigit: PropTypes.string,
    tenThousandsDigit: PropTypes.number,
    thousandsDigit: PropTypes.number,
    hundredsDigit: PropTypes.number,
    tensDigit: PropTypes.number,
    onesDigitDigit: PropTypes.number,

}

export default Footer