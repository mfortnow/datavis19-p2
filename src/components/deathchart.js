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

function getKeyPath(node) {
  if (!node.parent) {
    return ['root'];
  }

  return [(node.data && node.data.name) || node.name].concat(
    getKeyPath(node.parent)
  );
}

function updateData(data, keyPath) {
  if (data.children) {
    data.children.map(child => updateData(child, keyPath));
  }
  // add a fill to all the uncolored cells
  if (!data.hex) {
    data.style = {
      fill: EXTENDED_DISCRETE_COLOR_RANGE[5]
    };
  }
  data.style = {
    ...data.style,
    fillOpacity: keyPath && !keyPath[data.name] ? 0.2 : 1
  };

  return data;
}

//Tree Structure: Year, Dead/Alive, Character Died Once, Character Died Twice, etc.
function year(data, num) {
	return data.filter(d => d.Year === num)
};

function died1(data) {
	return data.filter(d => d.DEATH1 === 'YES');
};

function died2(data){
	return data.filter(d => d.DEATH2 === 'YES');
};

function died3(data){
	return data.filter(d => d.DEATH3 === 'YES');
};

function died4(data){
	return data.filter(d => d.DEATH4 === 'YES');
};

function died5(data){
	return data.filter(d => d.DEATH5 === 'YES');
};

function deathchart(data) {
	full = {
		'children': [

		]
	};
	leaf1 = year(data);
	for (i=0; i< leaf1.length; i++){

	};



	return full;
};

function gender(d, keyoi) {
	return d.filter(row => row.GENDER === keyoi);
}

const buttons = ['Female','Male']

export default class Chart4 extends Component {
  constructor() {
    super();
    this.state = {
      finalValue: 'Sunburst'
      pathValue: false,
      keyOfInterest: 'Female'
      clicked: false
    };
  }
  render() {
  	const {clicked, finalValue, pathValue, keyOfInterest} = this.state;
    const {data} = this.props;
    const preppedData = updateData(getdat(death(gender(data, keyOfInterest)).find(d => {
      return (d.Gender === keyOfInterest);
    })), false);
    console.log()
  	return(
  		<div>
  		<Sunburst
  			animation
  		  hideRootNode
  		  colorType="literal"
  		  data={preppedData}
  		  height={350}
  		  width={350}
  		  onValueMouseOver={node => {
          if (clicked) {
            return;
          }
          const path = getKeyPath(node).reverse();
          const pathAsMap = path.reduce((res, row) => {
            res[row] = true;
            return res;
          }, {});
          this.setState({
            finalValue: path[path.length - 1],
            pathValue: path.join(' > '),
            data: updateData(decoratedData, pathAsMap)
          });
        }}
        onValueMouseOut={() =>
          clicked
            ? () => {}
            : this.setState({
                pathValue: false,
                finalValue: false,
                data: updateData(decoratedData, false)
              })
        }
        onValueClick={() => this.setState({clicked: !clicked})}
        style={{
          stroke: '#ddd',
          strokeOpacity: 0.3,
          strokeWidth: '0.5'
        }}
  		>
        //{value !== false && <Hint value={value} />}
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











