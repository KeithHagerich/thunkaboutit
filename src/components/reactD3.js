import React from 'react';
import PropTypes from 'prop-types';


const ReactDthree = ({height, width}) => {

    
    return (
        <div>
            <svg className="chart-container">
                <g>{height}</g>
                <g>{width}</g>
                <g className="candlestick">candlestick</g>
                <g className="x-axis">x axis</g>
                <g className="y-axis">y axis</g>
            </svg>
        </div>
    );
};

ReactDthree.propTypes = {
    data: PropTypes.any.isRequired,
    height: PropTypes.number,
    width: PropTypes.number
//props
};

export default ReactDthree;