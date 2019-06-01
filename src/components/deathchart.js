import React, {Component} from 'react';
import {Sunburst, Hint} from 'react-vis';

function groupBy(data, key) {
  return data.reduce((acc, row) => {
    if (!acc[row[key]]) {
      acc[row[key]] = [];
    }
    acc[row[key]].push(row);
    return acc;
  }, {});
}

function death(data) {
	return data.reduce((acc, row) => {





	return acc;
	});
}



export default class Chart1 extends Component {
  constructor() {
    super();
    this.state = {
      value: false,
      keyOfInterest: 'Female'
    };
  }

  render() {
  	const {value, keyOfInterest} = this.state;
    const {data} = this.props;
    const preppedData = death(data);

  	return() {

  	}
  }

}











