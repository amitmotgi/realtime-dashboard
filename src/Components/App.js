import React, {Component, Proptypes} from "react";
import ReactDOM from  'react-dom';
// import {Chart} from 'react-d3-core';
// import {LineChart} from 'react-d3-basic';
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

const io = require('socket.io-client');
const socket = io();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      date: null
    };
    socket.on('server request', (payload) => this.updateDataSet(payload));
  }

  getInitialState() {
    return {data: [], date: null};
  }

  updateDataSet(data) {
    this.setState({
      data: data.value,
      date: data.date
    });
  }

  render() {
    try {
      var width = 600,
        height = 300,
        margins = {left: 100, right: 100, top: 50, bottom: 50},
        title = "User sample",
        // chart series,
        // field: is what field your data want to be selected
        // name: the name of the field that display in legend
        // color: what color is the line
        chartSeries = [
          {
            field: 'point',
            name: 'Number of Visits',
            color: '#ff7f0e'
          }
        ],
        // your x accessor
        x = function(d) {
          return d.index;
        };

        return (
          <LineChart
            showXGrid= {false}
            showYGrid= {false}
            margins= {margins}
            title={title}
            data={this.state.data}
            width={width}
            height={height}
            chartSeries={chartSeries}
            x={x}
          />
        );
    } catch (e) {
      // report errors...
    }

  }
};
