import React from 'react';
import {csv} from 'd3-fetch';
import ExampleChart from './example-chart';
import Chart1 from './chart1';
import Chart2 from './mollychart';
import Chart3 from './alignchart';
import Chart4 from './deathchart2';
import Chart5 from './doopchart';
import Dooper from './doop'


const doops = [{Text: 'doop is da bomb', True: 0, False: 1},
               {Text: 'doop is da bomb digitty at math', True: 1, False: 0},
               {Text: 'yo3', tf: 1},
                {Text: 'yo4', tf: 0}, {Text: 'yo5', tf: 0}, {Text: 'yeet', tf: 1}];
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

const preBlonde = `
In recent years, with the rise of the Marvel Cinematic Universe (MCU) and the DC Extended Universe (DCEU), 
superheros have become a mainstream pop culture phenomenon on the big screen. But with phase III of the MCU’s 
overarching plot finally at a close, we thought we’d take a look back at the superheroes of the last 4 decades 
in the comics to see what sets them apart. One metric of this is whether these comics have historically portrayed 
women and men differently, and whether we can see a bias in the way women have been portrayed. One example: though 
blonde characters across genders do not make up a majority, there is a significantly higher percentage of blonde 
women than men in both marvel and DC.
`;

const postBlonde = `
Looking at this data shows us that there is some bias between the way women are depicted in comics which 
is consistent across these different companies. This data only includes superpeople; 
this ratio might even be higher if non-super women were included. Female superheroes are 
often portrayed as incredibly athletic with model-like beauty, especially in older comics. 
The data here begs the question of correlation between this attractiveness and the higher 
proportion of blondeness in women than other characters.
`;

const preAlign = `
Another interesting comparison between genders is that of alignment. 
Though the comics may have gotten more progressive over the years, there is still a clear 
bias of women as good characters -- Marvel has more bad men than good, but the ratio 
of bad to good women is almost even; in DC, this comparison is even more stark, with even 
more women being good than bad.
`;

const postAlign =  `
This is another indicator of women more likely to be seen as good and pure, and even neutral, 
than bad. One possible explanation is that villains are often very conflicted, tortured souls, 
and comics have had a hard time portraying women as much more than one-dimensional, 
which often translates to good characters.
`;

const preDeath = `
There are certainly more male Avengers than female, but that hasn’t stopped them from dying. 
When it comes to jobs, being an Avenger is definitely one of the more dangerous professions. 
Many die; but many don’t stay dead, and some don’t just die once. 
Scroll over to see how many times each avenger has kicked the bucket.
`;

const postDeath = `
Jocasta has the record among the Avengers at 5 deaths. In terms of raw numbers of characters 
who have died, the difference between Male and Female is not particularly significant: with 
41 and 36% respectively dying at some point. There does seem to be a slight difference in the 
spread, as Marvel seems more comfortable killing off new male characters than female characters, 
while most female character deaths come from the older members of the Avengers.
`;

const preQueer = `
So how have the comics, and their representation of the world, changed over time? One variable 
that is an interesting metric is the introduction of queer characters. Certainly, both companies 
have introduced more queer characters as time has gone on, especially in the past decade. But the 
optimism ends there.
`;

const queerNote =  `
(We chose to focus on sexuality rather than gender identity when discussing queer characters, 
because lack of gender/gender non-conformity may be due to factors not related to representation, 
such as differences in species and magic.)
`;

const postQueer = `
With superheroes becoming more mainstream and LGBTQ+ communities becoming more visible, it seems 
almost inevitable that queer people would be more represented in recent years. But there has 
still not been a single year with more than 5 queer characters introduced in DC, and 7 for Marvel. 
mpare this to the number of straight characters introduced every year, which hovers in the 
hundreds for Marvel and has broken 200 in DC often, and you can see that the representation 
simply does not match the representation in the real world population. Furthermore, the increase 
of queer characters has not been regular; both companies have had years with good representation 
immediately preceding years with bad representation. Furthermore, the majority of these queer 
characters have been gay, as opposed to bisexual or pansexual. This follows a common narrative 
of single-minded representation which focuses on the most ‘mainstream’ queer identities and 
erases others.
`;

const preDoop = `
While gathering the data for this report, we stumbled upon what might be the clearest sign we 
live in a new time; the fifth horseman of the apocalypse, a true indicator that nothing matters 
anymore, and our new favorite marvel character whom we will forever revere. His name is Doop. 
Why is he such an icon? Answer the questions to find out:
`;

const postDoop = `
Historically, comic books have served as havens for young men looking for over-sexualized 
justice-bringing figures, providing role models to those who enjoyed their contents. However, 
as Marvel and DC push to expand their audience into new generations, it is refreshing to see 
female characters take on full personalities and back stories, and more queer representation 
across the board (even if they take the form of characters like Doop). Now, all kinds of people 
can take inspiration from heroes and Doops alike.
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
      <div className="relative" align="center">
        <h1> Comics are Evolving</h1>
        <h1> by Hilina Mekuria, Molly Fortnow, and Howey Qiu </h1>
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
        <table cellpadding="20">
          <thead>
            <th>Marvel</th>
            <th>DC</th>
          </thead>
          <tbody>
            <th><Chart3 data={data[0]}/></th>
            <th><Chart3 data={data[1]}/></th>
          </tbody>
        </table>
        <div>{'Uh I guess this is a thing'}</div>
        <Chart4 data={data[2]}/>
        <div>{'heres the doop chart fuckers'}</div>
        <div id="doopinfo">
          <p>Click the text see the fact again</p>
        </div>
        <table>
          <tbody>
            <tr><Dooper data={doops[0]}/></tr>
            <tr><Dooper data={doops[1]}/></tr>
          </tbody>
        </table>
      </div>
    );
  }
}
RootComponent.displayName = 'RootComponent';
export default RootComponent;
