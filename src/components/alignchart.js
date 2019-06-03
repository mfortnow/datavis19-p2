import React, {Component} from 'react';
import {VerticalBarSeries, XYPlot, XAxis, YAxis, HorizontalGridLines, Hint} from 'react-vis';

function groupBy(data, key) {
  return data.reduce((acc, row) => {
    if (!acc[row[key]]) {
      acc[row[key]] = [];
    }
    acc[row[key]].push(row);
    return acc;
  }, {});
}

function align(data) {
  var gender = 0;
  return data.reduce((acc, row) => {
    if (row.SEX === 'Male Characters') {
      gender = 0;
    } else if (row.SEX === 'Female Characters') {
      gender = 1;
    } else {
      gender = 2;
    }
    if (row.ALIGN === 'Good Characters') {
      acc[gender].Good++;
    } else if (row.ALIGN === 'Neutral Characters') {
      acc[gender].Neutral++;
    } else {
      acc[gender].Bad++;
    }
    return acc;
  }, [{Gender: 'Male', Good: 0, Neutral: 0, Bad: 0},
      {Gender: 'Female', Good: 0, Neutral: 0, Bad: 0},
      {Gender: 'Other', Good: 0, Neutral: 0, Bad: 0}]);
}

// function getdat(bdata, g) {
//   var rtn = {};
//   bdata.forEach(function (d) {
//
//   })
// }

function getdat(d) {
  return [{x: 'Good', y: d.Good},
          {x: 'Neutral', y: d.Neutral},
          {x: 'Bad', y: d.Bad}]
}

const buttons = ['Female', 'Male', 'Other'];

export default class Chart3 extends Component {
  constructor() {
    super();
    this.state = {
      value: false,
      keyOfInterest: 'Male'
    };
  }

  render() {
    const {value, keyOfInterest} = this.state;
    const {data} = this.props;
    const preppedData = getdat(align(data).find(d => {
      return (d.Gender === keyOfInterest);
    }));
    console.log(preppedData);
    // [{Label: 'Blonde', Size: 66}, {}

    return (
      <div>
        <XYPlot
          className="idk bruh"
          width={300}
          height={300}
          xType = "ordinal"
          >
        <VerticalBarSeries
          animation
          cluster="align"
          color="#12939A"
          data={preppedData}
          onNearestXY={v => this.setState({value: v})}
          onSeriesMouseOut={v => this.setState({value: false})}
        />
        {value !== false && <Hint value={{Number: value.y}} />}
        <XAxis />
        <YAxis />
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


// import React, {Component} from 'react';
// import {RadialChart, Hint} from 'react-vis';
//
// function groupBy(data, key) {
//   return data.reduce((acc, row) => {
//     if (!acc[row[key]]) {
//       acc[row[key]] = [];
//     }
//     acc[row[key]].push(row);
//     return acc;
//   }, {});
// }
//
// function align(data) {
//   var gender = 0;
//   return data.reduce((acc, row) => {
//     if (row.SEX === 'Male Characters') {
//       gender = 0;
//     } else if (row.SEX === 'Female Characters') {
//       gender = 1;
//     } else {
//       gender = 2;
//     }
//     if (row.ALIGN === 'Good Characters') {
//       acc[gender].Good++;
//     } else if (row.ALIGN === 'Neutral Characters') {
//       acc[gender].Neutral++;
//     } else {
//       acc[gender].Bad++;
//     }
//     return acc;
//   }, [{Gender: 'Male', Good: 0, Neutral: 0, Bad: 0},
//       {Gender: 'Female', Good: 0, Neutral: 0, Bad: 0},
//       {Gender: 'Other', Good: 0, Neutral: 0, Bad: 0}]);
// }
//
// // function getdat(bdata, g) {
// //   var rtn = {};
// //   bdata.forEach(function (d) {
// //
// //   })
// // }
//
// function getdat(d) {
//   return [{key: 'Good', size: d.Good},
//           {key: 'Neutral', size: d.Neutral},
//           {key: 'Bad', size: d.Bad}]
// }
//
// const buttons = ['Female', 'Male', 'Other'];
//
// export default class  extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: false,
//       keyOfInterest: 'Male'
//     };
//   }
//
//   render() {
//     const {value, keyOfInterest} = this.state;
//     const {data} = this.props;
//     const preppedData = getdat(align(data).find(d => {
//       return (d.Gender === keyOfInterest);
//     }));
//     console.log(preppedData);
//     // [{Label: 'Blonde', Size: 66}, {}
//     return (
//       <div>
//         <RadialChart
//           animation
//           innerRadius={100}
//           radius={140}
//           getAngle={d => d.size}
//           data={preppedData}
//           onValueMouseOver={v => this.setState({value: v})}
//           onSeriesMouseOut={v => this.setState({value: false})}
//           width={300}
//           height={300}
//           padAngle={0.04}
//         >
//           {value !== false && <Hint value={value} />}
//         </RadialChart>
//         {buttons.map(key => {
//           return (<button
//             key={key}
//             onClick={() => this.setState({keyOfInterest: key})}
//             >{key}</button>);
//         })}
//       </div>
//     );
//   }
// }
