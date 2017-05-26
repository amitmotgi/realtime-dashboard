import React, {Component, Proptypes} from "react";
//import ReactDOM from  'react-dom';
import {Chart} from 'react-d3-core';
import {LineChart} from 'react-d3-basic';

const io = require('socket.io-client');
const socket = io();

export default class App extends Component {
  constructor(props) {
    super(props);
    socket.on('server request', (payload) => this.updateDataSet(payload));
  }

  updateDataSet(data) {
console.log(" updating...... the data set...", data.value);
    this.setState({
      data: data.value,
      date: data.date
    });
  }

  render() {
    var width = 700,
      height = 300,
      margins = {left: 100, right: 100, top: 50, bottom: 50},
      title = "User sample",
      // chart series,
      // field: is what field your data want to be selected
      // name: the name of the field that display in legend
      // color: what color is the line
      chartSeries = [
        {
          field: 'data',
          name: 'data',
          color: '#ff7f0e'
        }
      ],
      // your x accessor
      x = function(d) {
        return d.index;
      };

      return (
        <h1>{this.state.data}</h1>
      );
    // return (
    //   <Chart
    //     title={title}
    //     width={width}
    //     height={height}
    //     margins= {margins}
    //     >
    //     <LineChart
    //       showXGrid= {false}
    //       showYGrid= {false}
    //       margins= {margins}
    //       title={title}
    //       data={this.state.data}
    //       width={width}
    //       height={height}
    //       chartSeries={chartSeries}
    //       x={x}
    //     />
    //   </Chart>
    // );
  }
};
