// you can put util functions here if you want
import {csv} from 'd3-fetch';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

domReady(() => {
  csv('./data/marvel-wikia-data.csv')
    .then(mdata => myVis(mdata));

  csv('./data/dc-wikia-data.csv')
    .then(dcdata => myVis(dcdata));

  csv('./data/avengers.csv')
    .then(avdata => myVis(avdata));
});

<XYPlot
  width={300}
  height={300}
  getX={d => d[0]}
  getY={d => d[1]}>
  <LineSeries
    data = {data}
    color="red"
    data={[
      [1, 0],
      [2, 1],
      [3, 2]
    ]}/>
</XYPlot>
