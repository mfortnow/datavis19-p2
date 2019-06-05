import React from 'react';
import {csv} from 'd3-fetch';
import ExampleChart from './example-chart';
import Chart1 from './chart1';
import Chart2 from './mollychart';
import Chart3 from './alignchart';
import Chart4 from './deathchart2';
import Chart5 from './doopchart';
import Dooper from './doop'


const doops = [{Text: 'Doop has Superhuman Strength, and has fought Thor to a standstill.',
                  True: "True. He picked up mjolnir and duplicated it to defeat him.",
                  False: "Nope, he most certainly did."},
               {Text: 'Doop is canonically bisexual, and it is heavily implied that Doop has slept with Madonna',
                  True: "True, he also has had an affair with a woman, then ran off with the man hired by her husband to investigate them",
                  False: "Actually, he is bisexual (and possibly slept with Madonna?)."},
               {Text: 'Doop has a backup brain in his butt, which allows him to speak English.',
                  True: "Yep! Normally he only speaks Doopspeak but when he needed to get his brain back from the Avengers, he spoke English.",
                  False: "Nope. We didn't make up a single word of that."},
               {Text: 'Doop Land is an Amusement Park in Austria.',
                  True: "No way Jose, what did you think Austria was into? They do not support our BI-CONIC QWEEN",
                  False: "That's right, it is the name for the multi-dimensional hole in his stomach that he uses to store and replicate items"},
               {Text: 'Doop’s occupations include receptionist, kitchen maid, videographer, philanthropist, and priest.',
                  True: "You get it. Doop does it all.", False: "At this point, what part of that was unbelievable? Try again."},
               {Text: 'Doop fought Satan and lost',
                  True: "False, HE DEFEATED HIM", False: "Yep, that's right. Of course that didn't happen, he WON"}];
const position = [{x0: 100, x: 500, y0: 0, y: 200, Text: 'yo1', tf: 1},
                  {x0: 100, x: 500, y0: 200, y: 400, Text: 'yo2', tf: 0},
                  {x0: 100, x: 500, y0: 400, y: 600, Text: 'yo3', tf: 1},
                  {x0: 100, x: 500, y0: 600, y: 800, Text: 'yo4', tf: 0},
                  {x0: 100, x: 500, y0: 800, y: 1000, Text: 'yo5', tf: 0},
                  {x0: 100, x: 500, y0: 1000, y: 1200, Text: 'yeet', tf: 1}];

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
      return <h1
      className="title"
      >LOADING</h1>;
    }
    return (
      <div className="relative" align="center">
        <h1
        className="title"
        > Hello Explainable!</h1>
        <div
        className="text"
        >{`The example data was loaded! There are ${data[0].length} rows`}</div>
        <table cellpadding="20">
          <thead>
            <th
            className="subtitle"
            >Marvel</th>
            <th
            className="subtitle"
            >DC</th>
          </thead>
          <tbody>
            <th><div className="chart"><Chart1 data={data[0]}/></div></th>
            <th><div className="chart"><Chart1 data={data[1]}/></div></th>
          </tbody>
        </table>
        <div
        className="text"
        >{'LMAO this is a mess like my LIFEEE (bitch)'}</div>
          <table cellpadding="10">
          <thead>
            <th
            className="subtitle"
            >Marvel</th>
            <th
            className="subtitle"
            >DC</th>
          </thead>
          <tbody>
            <th><div className="chart"><Chart3 data={data[0]}/></div></th>
            <th><div className="chart"><Chart3 data={data[1]}/></div></th>
          </tbody>
          </table>
<<<<<<< HEAD
        <div className="textbody">{longBlock}</div>
        <div>{'Uh I guess this is a thing'}</div>
        <div className="chart" id="deathchart" align="center"><Chart4 data={data[2]}/></div>
        <div>{'heres the doop chart fuckers'}</div>
        <div>{'cutting edge journalism'}</div>
=======
        <div
        className="text"
        >{longBlock}</div>
        <div
        className="text"
        >{'Uh I guess this is a thing'}</div>
        <Chart4 data={data[2]}/>
        <div
        className="text"
        >{'heres the doop chart fuckers'}</div>
        <div
        className="text"
        >{'cutting edge journalism'}</div>
>>>>>>> 1e522fadbf5dff24bdb1eff765b35368cdf451d1
        <table cellpadding="20">
          <thead>
            <th
            className="subtitle"
            >Marvel</th>
            <th
            className="subtitle"
            >DC</th>
          </thead>
          <tbody>
            <th><div className="chart"><Chart2 data={data[0]}/></div></th>
            <th><div className="chart"><Chart2 data={data[1]}/></div></th>
          </tbody>
        </table>
        <div>
          <b
          className="text"
          >Click the text see the fact again</b>
        </div>
        <table>
          <tbody>
            <tr class="wrap"><Dooper data={doops[0]}/></tr>
            <tr class="wrap"><Dooper data={doops[1]}/></tr>
            <tr class="wrap"><Dooper data={doops[2]}/></tr>
            <tr class="wrap"><Dooper data={doops[3]}/></tr>
            <tr class="wrap"><Dooper data={doops[4]}/></tr>
            <tr class="wrap"><Dooper data={doops[5]}/></tr>
          </tbody>
        </table>
        <div id="doopinfo">
          <h3>Doop Sources (Doources):</h3>
          <p><a href="https://lgbt.wikia.org/wiki/Doop_(comics)">Bi-Doop</a></p>
          <p><a href="https://media.comicbook.com/wp-content/uploads/2012/08/doop-thor-640x320.jpg">Strong-Doop</a></p>
        </div>
      </div>
    );
  }
}
RootComponent.displayName = 'RootComponent';
export default RootComponent;
