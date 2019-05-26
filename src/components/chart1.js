import React, {Component} from 'react';
import {RadialChart, Hint} from 'react-vis';

function groupBy(data, key) {
  return data.reduce((acc, row) => {
    if (!acc[row[key]]) {
      acc[row[key]] = [];
    }
    acc[row[key]].push(row);
    return acc;
  }, {});
}

function blonde(data) {
  return data.reduce((acc, row) => {
    if (!(row.HAIR === 'Blond Hair')) {
      if (row.SEX === 'Male Characters') {
        acc[0].Other ++;
      }
      if (row.SEX === 'Female Characters') {
        acc[1].Other ++;
      }
      else {
        acc[2].Other ++;
      }
    }
  else {
    if (row.SEX === 'Male Characters') {
      acc[0].Blonde ++;
    }
    if (row.SEX === 'Female Characters') {
      acc[1].Blonde ++;
    }
    else {
      acc[2].Blonde ++;
    }
  }
    return acc;
  }, [{Gender: 'Male', Blonde: 0, Other: 0},
      {Gender: 'Female', Blonde: 0, Other: 0},
      {Gender: 'Other', Blonde: 0, Other: 0}]);
}

// function getdat(bdata, g) {
//   var rtn = {};
//   bdata.forEach(function (d) {
//
//   })
// }

function getdat(d) {
  return [{key: 'Blonde', size: d.Blonde},
          {key: 'Other', size: d.Other}]
}

const buttons = ['Female', 'Male', 'Other'];

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
    const preppedData = getdat(blonde(data).find(d => {
      return (d.Gender === keyOfInterest);
    }));
    console.log(preppedData);
    // [{Label: 'Blonde', Size: 66}, {}
    return (
      <div>
        <RadialChart
          animation
          innerRadius={100}
          radius={140}
          getAngle={d => d.size}
          data={preppedData}
          onValueMouseOver={v => this.setState({value: v})}
          onSeriesMouseOut={v => this.setState({value: false})}
          width={300}
          height={300}
          padAngle={0.04}
        >
          {value !== false && <Hint value={value} />}
        </RadialChart>
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
