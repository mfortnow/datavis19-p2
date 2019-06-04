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


function death(data){



};

const buttons = ['Female', 'Male'];

export default class Chart4 extends Component {
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
    const preppedData = getdat(death(data).find(d => {
      return (d.Gender === keyOfInterest);
    }));
    console.log(preppedData);
    return (
      <div>
        <RadialChart
          animation
          innerRadius={50}
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

