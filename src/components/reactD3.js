import React from 'react';
import PropTypes from 'prop-types';
import {axisBottom, axisLeft} from 'd3-axis';
import {scaleLinear} from 'd3-scale';
import {csv} from 'd3-fetch';
import {ascending} from 'd3-array';
import {timeParse} from 'd3-time-format';
import techan from 'techan';


const ReactDthree = ({height, width}) => {

    const margin = {top: 20, right: 20, bottom: 30, left: 50};
    const svgWidth = height - margin.left - margin.right;
    const svgHeight = width - margin.top - margin.bottom;

    const parseDate = timeParse("%d-%b-%y");

    const x = techan.scale.financetime()
        .range([0, svgWidth]);

    const y = scaleLinear()
        .range([svgHeight, 0]);

    const candlestick = techan.plot.candlestick()
        .xScale(x)
        .yScale(y);

    const xAxis = axisBottom()
        .scale(x);

    const yAxis = axisLeft()
        .scale(y);

    csv("https://github.com/KeithHagerich/thunkaboutit/blob/master/src/resources/data.csv", function(error, data) {
        const accessor = candlestick.accessor();

        data = data.slice(0, 200).map(function(d) {
            return {
                date: parseDate(d.Date),
                open: +d.Open,
                high: +d.High,
                low: +d.Low,
                close: +d.Close,
                volume: +d.Volume
            };
        }).sort(function(a, b) { return ascending.ascending(accessor.d(a), accessor.d(b)); });

        // Data to display initially
        draw(data.slice(0, data.length-20));

    });

    function draw(data) {
        x.domain(data.map(candlestick.accessor().d));
        y.domain(techan.scale.plot.ohlc(data, candlestick.accessor()).domain());

    }
        
    return (
        <div>
            <svg width={width} height={height}>
                <g className="candlestick">candlestick</g>
                <g className="x-axis">{xAxis}</g>
                <g className="y-axis">{yAxis}</g>
            </svg>
        </div>
    );
};

ReactDthree.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number
//props
};

export default ReactDthree;