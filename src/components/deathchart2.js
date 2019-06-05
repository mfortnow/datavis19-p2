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

// function death(data){
// 	let i;
// 	for(i=0; i<data.length; i++) {
// 		data[i].angle = 360/data.length;
// 		if (data[i].Death1 === 'YES') {
// 			if (data[i].Death2 === 'YES') {
// 				if (data[i].Death3 === 'YES') {
// 					if (data[i].Death4 === 'YES') {
// 						if (data[i].Death5 === 'YES'){
// 							data[i].deaths = 5;
// 						} else {
// 							data[i].deaths = 4;
// 						};
// 					} else {
// 						data[i].deaths = 3;
// 					};
// 				} else {
// 					data[i].deaths = 2;
// 				};
// 			} else {
// 				data[i].deaths = 1;
// 			}
// 		}	else {
// 			data[i].deaths = 0;
// 		};

// 		data[i] = {
// 			gender: data[i].Gender,
// 			angle: data[i].angle,
// 			radius: (data[i].deaths + 1) * 25,
// 			label: data[i].Name
// 		};
// 	};
// };

function death(data){
	console.log("it's now!!!");
	let acc = [];
	const angle = 360/data.length;
	data.forEach((row) => {
		if (row.Death1 === 'YES') {
			if (row.Death2 === 'YES') {
				if (row.Death3 === 'YES') {
					if (row.Death4 === 'YES') {
						if (row.Death5 === 'YES') {
							acc.push({name: row.Name, deaths: 5, angle: angle, innerRadius: 50, radius: 175, gender: row.Gender});
						} else {
							acc.push({name: row.Name, deaths: 4, angle: angle, innerRadius: 50, radius: 150, gender: row.Gender});
						}
					} else {
						acc.push({name: row.Name, deaths: 3, angle: angle, innerRadius: 50, radius: 125, gender: row.Gender});
					}
				} else {
					acc.push({name: row.Name, deaths: 2, angle: angle, innerRadius: 50, radius: 100, gender: row.Gender});
				}
			} else {
				acc.push({name: row.Name, deaths: 1, angle: angle, innerRadius: 50, radius: 75, gender: row.Gender});
			}
		}	else {
			acc.push({name: row.Name, deaths: 0, angle: angle, innerRadius: 25, radius: 50, gender: row.Gender});
		}
	});
	return acc;
}


const buttons = ['FEMALE', 'MALE'];

export default class Chart4 extends Component {
  constructor() {
    super();
    this.state = {
      value: false,
      keyOfInterest: 'FEMALE'
    };
  }

  render() {
    const {value, keyOfInterest} = this.state;
    const {data} = this.props;
    console.log('DEATH', death(data));
    const preppedData = (death(data)).filter(d => (d.gender === keyOfInterest));
    console.log("prepped", preppedData);
    return (
      <div>
        <RadialChart
          animation
          data={preppedData}
          // innerRadius={d => {
          // 	if (d.deaths === 0) {
          // 		return 25;
          // 	} else {
          // 		return 50;
          // 	}
          // }}
          // radius={d => {
          // 	return (d.deaths * 25)+ 50;
          // }}
          onValueMouseOver={v => this.setState({value: v})}
          onSeriesMouseOut={v => this.setState({value: false})}
          width={500}
          height={500}
          padAngle={0.02}
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
