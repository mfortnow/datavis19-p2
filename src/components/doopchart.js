import React, {Component} from 'react';
import {VerticalRectSeries, Hint, XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

const buttons = ['True', 'False'];

export default class Chart5 extends Component {
  constructor() {
    super();
    this.state = {
      value: false,
      keyOfInterest: 'Text'
    };
  }

  render() {
    const {value, keyOfInterest} = this.state;
    const data = [{Text: 'yo1', tf: 1}, {Text: 'yo2', tf: 0}, {Text: 'yo3', tf: 1},
                    {Text: 'yo4', tf: 0}, {Text: 'yo5', tf: 0}, {Text: 'yeet', tf: 1}];
    const position = [{x0: 100, x: 500, y0: 0, y: 200}, {x0: 100, x: 500, y0: 200, y: 400}, {x0: 100, x: 500, y0: 400, y: 600},
                  {x0: 100, x: 500, y0: 600, y: 800}, {x0: 100, x: 500, y0: 800, y: 1000}, {x0: 100, x: 500, y0: 1000, y: 1200}];
    // const preppedData = data;

    // const preppedData = Object.entries(groupByYear(getdat(data), keyOfInterest))
    //   .map(([key, values]) => {
    //     return {Year: Number(key), Number: values.length};
      // })
    // const preppedData = Object.entries(groupBy(getdattwothestreet(getdat(data), keyOfInterest), 'year'))
    //   .map(([key, values]) => {
    //     return {x: Number(key), y: values.length};
    //   });
    console.log("prepped", data);
    console.log("position", position);

  return (
    <div>
      <XYPlot
        className="doop"
        width={600}
        height={1200}
        // getX0={(d, i) => 200 * i}
        // getY0={(d, i) => {
        //   if (i < 4) {
        //     return 0;
        //   }
        //   else {
        //     return 200;
        //   }
        // }}
        // getX0={(d, i) => 200 * (i+1)}
        // getY0={(d, i) => {
        //   if (i < 4) {
        //     return 200;
        //   }
        //   else {
        //     return 400;
        //   }
        // }}
        >
      <VerticalRectSeries
        animation
        //cluster="align"
        color="white"
        stroke="black"
        data={position}
        onNearestXY={v => this.setState({value: v})}
        onValueClick={v => this.setState({value: v})}
        onSeriesMouseOut={v => this.setState({value: false})}
      />
      {value !== false && <Hint value={value} />}
      </XYPlot>
    </div>
  );
}
}
