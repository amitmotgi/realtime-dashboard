import React, {Component, Proptypes} from "react";
import ReactDOM from  'react-dom';
import {Chart} from 'react-d3-core';
import {LineChart} from 'react-d3-basic';
import { Grid, Row, Col } from 'react-flexbox-grid';

const io = require('socket.io-client');
const socket = io();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      conversion: [],
      errors: [],
      latency: [],
      date: null
    };
    socket.on('server request', (payload) => this.updateDataSet(payload));
  }

  getInitialState() {
    return {
      data: [],
      conversion: [],
      errors: [],
      latency: [],
      date: null
    };
  }

  updateDataSet(data) {
    this.setState({
      data: data.value,
      conversion: data.conversion,
      errors: data.errors,
      latency: data.latency,
      date: data.date
    });
  }

  render() {
    try {
      var width = 700,
        height = 350,
        margins = {left: 100, right: 100, top: 50, bottom: 50},
        title = "User sample",
        // chart series,
        // field: is what field your data want to be selected
        // name: the name of the field that display in legend
        // color: what color is the line
        chartSeriesVisits = [
          {
            field: 'point',
            name: 'Visits',
            color: '#ff7f0e'
          }
        ],
        chartSeriesConversion = [
          {
            field: 'point',
            name: 'Conversion',
            color: '#4286f4'
          }
        ],
        chartSeriesErrors = [
          {
            field: 'point',
            name: 'Errors',
            color: '#f44183'
          }
        ],
        chartSeriesLatency = [
          {
            field: 'point',
            name: 'Latency',
            color: '#41f494'
          }
        ],
        // your x accessor
        x = function(d) {
          return d.index;
        };

        console.log(" server data points = ", this.state.data);
        return (
          <div>
            <Row>
              <Col xs>
                <LineChart
                  showXGrid= {true}
                  showYGrid= {true}
                  margins= {margins}
                  title={title}
                  data={this.state.data}
                  width={width}
                  height={height}
                  chartSeries={chartSeriesVisits}
                  x={x}
                />
              </Col>
              <Col xs>
                <LineChart
                  showXGrid= {false}
                  showYGrid= {false}
                  margins= {margins}
                  title={title}
                  data={this.state.conversion}
                  width={width}
                  height={height}
                  chartSeries={chartSeriesConversion}
                  x={x}
                />
              </Col>
            </Row>
            <Row>
              <Col xs>
                <LineChart
                  showXGrid= {false}
                  showYGrid= {false}
                  margins= {margins}
                  title={title}
                  data={this.state.errors}
                  width={width}
                  height={height}
                  chartSeries={chartSeriesErrors}
                  x={x}
                />
              </Col>
              <Col xs>
                <LineChart
                  showXGrid= {false}
                  showYGrid= {false}
                  margins= {margins}
                  title={title}
                  data={this.state.latency}
                  width={width}
                  height={height}
                  chartSeries={chartSeriesLatency}
                  x={x}
                />
              </Col>
            </Row>
          </div>
        );
    } catch (e) {
      // report errors...
    }

  }
};
