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


//Tree Structure: Year, Dead/Alive, Character Died Once, Character Died Twice, etc.
/*function death(data) {
	return data.reduce((acc, row) => {



	return acc;
	});
}*/

const buttons = ['Female','Male']

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
    
    const trialData = [
    {
    	'title': '1962',
    	'color': 'red',
    	'children': [
    	{
    		'title': 'Died Once',
    		'children': [
    			{'title': 'Guy 1', 'color': 'blue', 'size': 1},
    			{'title': 'Dude 3', 'color': 'green', 'size': 3}
    		]
    	},
    	{
    		'title': 'Died Twice',
    		'children': [
    			{'title': 'Guy 2', 'color': 'pink', 'size': 2}
    		]
    	}
    	]
    },
    {
    	'title': '1969',
    	'color': 'red',
    	'children': [
    	{
    		'title': 'Died Once',
    		'children': [
    			{'title': 'Lady 2', 'color': 'blue', 'size': 4},
    			{'title': 'Doop?', 'color': 'green', 'size': 10}
    		]
    	},
    	{
    		'title': 'Never Died',
    		'children': {'title': 'Love', 'color': 'red', 'size': 1}
    	}
    	]
    }];

    //const {data} = this.props;
    
    //const preppedData = getdat(death(data).find(d => {
    //  return (d.Gender === keyOfInterest);
    //}));
    console.log()
  	return(
  		<div>
  		<Sunburst
  		  hideRootNode
  		  colorType="literal"
  		  data={trialData[0]}
  		  //data={preppedData}
  		  height={350}
  		  width={350}
  		  onValueMouseOver={v => this.setState({value: v})}
          onSeriesMouseOut={v => this.setState({value: false})}
  		>
        {value !== false && <Hint value={value} />}
  		</Sunburst>
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











