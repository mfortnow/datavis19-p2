import React, {Component} from 'react';
import {LabelSeries, VerticalRectSeries, Hint, XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

const buttons = ['True', 'False'];

function getdat(d, keyOfInterest, text){
  var labz = "";
  if(keyOfInterest=='True') {
    labz = d.True;
    // if(Number(d.True)===1){
    //   labz = "you get it";
    // }else {
    //   labz = "NEE";
    // }
  } else if(keyOfInterest=='False'){
    labz = d.False;
    // if(d.False===1){
    //   labz = "yee...";
    // }else {
    //   labz = "where the belief"
    // }
  } else {
    return ([{x: 0, y:0, label: text, yOffset: 100, xOffset: -400, source:""}]);
  }
  return ([{x: 0, y: 0, label: labz, yOffset:100, xOffset:-400, source: d.Source}]);
}

export default class Dooper extends Component {
  constructor() {
    super();
    this.state = {
      value: false,
      keyOfInterest: 'Text'
    };
  }

  render() {
    const {value, keyOfInterest} = this.state;
    const {data} = this.props;
    const position = [{x0: 100, x: 500, y0: 0, y: 200, Text: 'yo1', tf: 1},
                      {x0: 100, x: 500, y0: 200, y: 400, Text: 'yo2', tf: 0},
                      {x0: 100, x: 500, y0: 400, y: 600, Text: 'yo3', tf: 1},
                      {x0: 100, x: 500, y0: 600, y: 800, Text: 'yo4', tf: 0},
                      {x0: 100, x: 500, y0: 800, y: 1000, Text: 'yo5', tf: 0},
                      {x0: 100, x: 500, y0: 1000, y: 1200, Text: 'yeet', tf: 1}];

    const prepped = getdat(data, keyOfInterest, data.Text);
    const prepos = [{x0: 100, x: 500, y0: 0, y: 200}];
    // const preppedData = data;

    // const preppedData = Object.entries(groupByYear(getdat(data), keyOfInterest))
    //   .map(([key, values]) => {
    //     return {Year: Number(key), Number: values.length};
      // })
    // const preppedData = Object.entries(groupBy(getdattwothestreet(getdat(data), keyOfInterest), 'year'))
    //   .map(([key, values]) => {
    //     return {x: Number(key), y: values.length};
    //   });
    console.log("this dat", data);
    console.log("prepped this dat", prepped);

  return (
    // <div>
    //   <XYPlot
    //     className="doop"
    //     width={600}
    //     height={200}
    //     // getX0={(d, i) => 200 * i}
    //     // getY0={(d, i) => {
    //     //   if (i < 4) {
    //     //     return 0;
    //     //   }
    //     //   else {
    //     //     return 200;
    //     //   }
    //     // }}
    //     // getX0={(d, i) => 200 * (i+1)}
    //     // getY0={(d, i) => {
    //     //   if (i < 4) {
    //     //     return 200;
    //     //   }
    //     //   else {
    //     //     return 400;
    //     //   }
    //     // }}
    //     >
    //   <VerticalRectSeries
    //     animation
    //     //cluster="align"
    //     stroke="black"
    //     // data={position}
    //     data={prepos}
    //     // onNearestXY={v => this.setState({value: v})}
    //     onValueClick={v => this.setState({value: v})}
    //     onSeriesMouseOut={v => this.setState({value: false})}
    //   >
    // </VerticalRectSeries>
    //   <LabelSeries
    //     style={{pointerEvents: 'none'}}
    //     data={prepped}
    //     labelAnchorX="middle"
    //     labelAnchorY="middle"
    //     //
    //     onValueClick={v => {
    //       if (this.state.value) {
    //         this.setState({value: false})
    //       }
    //       else {
    //         this.setState({value: v})
    //       }}}
    //     onSeriesMouseOut={v => this.setState({value: false})}
    //     />
    //   {value !== false && <Hint value={value} />}
    //   </XYPlot>
    // </div>
    <div className="doop" align="center">
      <XYPlot
        className="doop"
         width={800}
         height={200}
      >

 <LabelSeries
        //style={{pointerEvents: 'none'}}
        data={prepped}
        labelAnchorX="middle"
        labelAnchorY="middle"
        onValueClick={v => this.setState({keyOfInterest:'Text'})}
        // onValueClick={v => {
        //   if (this.state.value) {
        //     this.setState({value: false})
        //   }
        //   else {
        //     this.setState({value: v})
        //   }}}
        onSeriesMouseOut={v => this.setState({value: false})}
        >
        </LabelSeries>
      {value !== false && <Hint value={value} />}
      </XYPlot>
      <div className="button" align="center">
      {buttons.map(key => {
        return (<button
          key={key}
          onClick={() => this.setState({keyOfInterest: key})}
          >{key}</button>);
      })}</div>
    </div>
  );
}
}
