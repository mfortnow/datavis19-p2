import React, {Component} from 'react';
import {RadialChart, Hint, XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

function groupBy(data, key) {
  return data.reduce((acc, row) => {
    if (!acc[row[key]]) {
      acc[row[key]] = [];
    }
    acc[row[key]].push(row);
    return acc;
  }, {});
}

let year = -1;
function yearer(yea) {

}

function getdat(data) {
  return data.reduce((acc, row) => {
    let year = -1;
    if (Number.isNaN(Number(row.Year))) {
      year = Number(row.YEAR);
    }
    else {
      year = Number(row.Year);
    }
    let queer = {};
    if (row.GSM === 'Homosexual Characters') {
      queer = {identity: 'Homosexual', year: year, alive: row.ALIVE};
    }
    if (row.GSM === 'Bisexual Characters') {
      queer = {identity: 'Bisexual', year: year, alive: row.ALIVE};
    }
    if (row.GSM === 'Pansexual Characters') {
      queer = {identity: 'Pansexual', year: year, alive: row.ALIVE};
    }
    if (row.GSM === '') {
      queer = {identity: 'Straight', year: year, alive: row.ALIVE};
    }
    // else {
    //   return acc;
    // }
    acc.push(queer);
    return acc;
  }, []);
}

// this one is like assuming you've already done the first getdat
function getdattwothestreets(data, key) {
  if (key === 'All Queer') {
    return data.reduce((acc, d) => {
      if (d.identity != 'Straight' && d.year != 0 && !(isNaN(d.year))) {
        acc.push(d);
      }
      return acc;
    }, [])
  }
  else {
    return data.reduce((acc, d) => {
      if (d.identity === key && d.year != 0 && !(isNaN(d.year))) {
        acc.push(d);
      }
      return acc;
    }, [])
  }
}

// function groupBye(data, key, keyoi, ckeyoi) {
//   return data.reduce((acc, row) => {
//     if (row[key] === 0 || (isNaN(row[key]))) {
//       return acc;
//     }
//     if (!acc[row[key]]) {
//       acc[row[key]] = [];
//     }
//     if (ckeyoi === 'All Queer') {
//       if (acc[row[keyoi]] != 'Straight') {
//         acc[row[key]].push(row);
//       }
//     }
//     else if (acc[row[keyoi]] === ckeyoi) {
//       acc[row[key]].push(row);
//     }
//     return acc;
//   }, {});
// }

function groupByYear(data, keyoi) {
  const rtn = data.reduce((acc, d) => {
    if (d.year === 0 || (isNaN(d.year))) {
      return acc;
    }
    if (!acc[d.year]) {
      acc[d.year] = [];
    }
    if (keyoi === 'All Queer') {
      if (d.identity != 'Straight') {
        acc[d.year].push(d);
      }
      return acc;
    }
    if (d.identity === keyoi) {
      acc[d.year].push(d);
    }
    return acc;
  }, {});
  console.log("groupbye", rtn);
  return rtn;
}

const buttons = ['All Queer', 'Homosexual', 'Bisexual', 'Pansexual', 'Straight'];

export default class Chart2 extends Component {
  constructor() {
    super();
    this.state = {
      value: false,
      keyOfInterest: 'All Queer'
    };
  }

  render() {
    const {value, keyOfInterest} = this.state;
    const {data} = this.props;
    const preppedData = Object.entries(groupByYear(getdat(data), keyOfInterest))
      .map(([key, values]) => {
        return {Year: Number(key), Number: values.length};
      });
    console.log(getdat(data));
    // const preppedData = Object.entries(groupBy(getdattwothestreet(getdat(data), keyOfInterest), 'year'))
    //   .map(([key, values]) => {
    //     return {x: Number(key), y: values.length};
    //   });
    console.log(preppedData);
    // [{Label: 'Blonde', Size: 66}, {}
    return (
      <div>
        <XYPlot
          width={300}
          height={300}
          getX={d => d.Year}
          getY={d => d.Number}>
          <LineSeries
          animation
          style={{strokeLinejoin: "round"}}
          data={preppedData}
          // onValueMouseOver={v => this.setState({value: v})}
          // onSeriesMouseOut={v => this.setState({value: false})}
          // onNearestX={(datapoint, event)=>{
          //   // does something on mouseover
          //   // you can access the value of the event
          // }}
          onNearestXY={v => this.setState({value: v})}
          onSeriesMouseOut={v => this.setState({value: false})}
          />
          <XAxis title="Year" />
          <YAxis title = "Number of Characters Introduced" />
          {value !== false && <Hint value={value} />}
        </XYPlot>
        {buttons.map(key => {
          return (<button
            key={key}
            onClick={() => this.setState({keyOfInterest: key})}
            >{key}</button>);
        })}
      </div>
    );
  }
}
