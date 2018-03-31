import React from 'react';
import PropTypes from 'prop-types';


const ReactDthree = ({data, height, width}) => {

    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = {width} - margin.left - margin.right,
        height = {height} - margin.top - margin.bottom;

    var parseDate = d3.timeParse("%d-%b-%y");

    const x = techan.scale.financetime()
        .range([0, width]);

    const y = d3.scaleLinear()
        .range([height, 0]);

    const candlestick = techan.plot.candlestick()
        .xScale(x)
        .yScale(y);

    const xAxis = d3.axisBottom()
        .scale(x);

    const yAxis = d3.axisLeft()
        .scale(y);

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("data.csv", function(error, data) {
        var accessor = candlestick.accessor();

        data = data.slice(0, 200).map(function(d) {
            return {
                date: parseDate(d.Date),
                open: +d.Open,
                high: +d.High,
                low: +d.Low,
                close: +d.Close,
                volume: +d.Volume
            };
        }).sort(function(a, b) { return d3.ascending(accessor.d(a), accessor.d(b)); });

        svg.append("g")
            .attr("class", "candlestick");

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")");

        svg.append("g")
            .attr("class", "y axis")
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Price ($)");

        // Data to display initially
        draw(data.slice(0, data.length-20));
        // Only want this button to be active if the data has loaded
        d3.select("button").on("click", function() { draw(data); }).style("display", "inline");
    });

    function draw(data) {
        x.domain(data.map(candlestick.accessor().d));
        y.domain(techan.scale.plot.ohlc(data, candlestick.accessor()).domain());

        svg.selectAll("g.candlestick").datum(data).call(candlestick);
        svg.selectAll("g.x.axis").call(xAxis);
        svg.selectAll("g.y.axis").call(yAxis);
    }

    return (
        <div>
            <svg className="chart-container">
                <g>transform="translate({margin.left},{margin.top})</g>
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