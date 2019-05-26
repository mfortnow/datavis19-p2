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

function getdat(data) {
  return data.reduce((acc, row) => {
    let queer = {};
    if (row.GSM === 'Homosexual Characters') {
      queer = {identity: 'Homosexual', year: Number(row.Year), alive: row.ALIVE};
    }
    if (row.GSM === 'Bisexual Characters') {
      queer = {identity: 'Bisexual', year: Number(row.Year), alive: row.ALIVE};
    }
    if (row.GSM === 'Pansexual Characters') {
      queer = {identity: 'Pansexual', year: Number(row.Year), alive: row.ALIVE};
    }
    if (row.GSM === '') {
      queer = {identity: 'Straight', year: Number(row.Year), alive: row.ALIVE};
    }
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
    const preppedData = Object.entries(groupBy(getdattwothestreets(getdat(data), keyOfInterest), 'year'))
      .map(([key, values]) => {
        return {x: Number(key), y: values.length};
      });
    console.log(preppedData);
    // [{Label: 'Blonde', Size: 66}, {}
    return (
      <div>
        <XYPlot
          width={300}
          height={300}>
          <LineSeries
          animation
          data={preppedData}
          onValueMouseOver={v => this.setState({value: v})}
          onSeriesMouseOut={v => this.setState({value: false})}
          />
          <XAxis title="Year" />
          <YAxis title = "Whatever Button You Pressed (I guess)" />
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
