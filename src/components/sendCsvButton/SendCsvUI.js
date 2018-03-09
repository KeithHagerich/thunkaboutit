import React from 'react';
import PropTypes from 'prop-types';


const SendCsvUI = ({onClick}) => {

    return (
        <button
            type="submit"
            className="btn btn-primary"
            onClick={onClick}>
            SEND
        </button>
    );
};

SendCsvUI.propTypes = {
    onClick: PropTypes.func.isRequired
//props
};

export default SendCsvUI;
