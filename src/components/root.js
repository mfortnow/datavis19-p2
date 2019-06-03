import React from 'react';
import {csv} from 'd3-fetch';
import ExampleChart from './example-chart';
import Chart1 from './chart1';
import Chart2 from './mollychart';
import Chart3 from './alignchart';
import Chart4 from './deathchart';
import Chart5 from './doopchart';


const longBlock = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

class RootComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loading: true
    };
  }

  componentWillMount() {
    Promise.all([csv('data/marvel-wikia-data.csv'),
                csv('data/dc-wikia-data.csv'),
                csv('data/avengers.csv')])
      .then(data => {
        this.setState({
          data,
          loading: false
        });
      });
    // csv('data/dc-wikia-data.csv')
    //   .then(ddata => {
    //     this.setState({
    //       ddata,
    //       loading: false
    //     });
    //   });
    //   console.log(this);
  }

  render() {
    const {loading, data} = this.state;
    if (loading) {
      return <h1>LOADING</h1>;
    }
    return (
      <div className="relative">
        <h1> Hello Explainable!</h1>
        <div>{`The example data was loaded! There are ${data[0].length} rows`}</div>
        <table cellpadding="20">
          <thead>
            <th>Marvel</th>
            <th>DC</th>
          </thead>
          <tbody>
            <th><div><Chart1 data={data[0]}/></div></th>
            <th><div><Chart1 data={data[1]}/></div></th>
          </tbody>
        </table>
        <div>{'LMAO this is a mess like my LIFEEE (bitch)'}</div>
        <table cellpadding="10">
        <thead>
          <th>Marvel</th>
          <th>DC</th>
          </thead>
          <tbody>
            <th><div className = "chart2"><Chart2 data={data[0]}/></div> </th>
            <th><div className = "chart2"><Chart2 data={data[1]}/></div></th>
            </tbody>
          </table>
        <div>{longBlock}</div>
        <div>{'cutting edge journalism'}</div>
        <Chart3 data={data[0]}/>
        <div>{'Uh I guess this is a thing'}</div>
        <Chart4/>
        <div>{'heres the doop chart fuckers'}</div>
        <Chart5/>
      </div>
    );
  }
}
RootComponent.displayName = 'RootComponent';
export default RootComponent;
