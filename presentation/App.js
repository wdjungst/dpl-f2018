import React from 'react';
import Highcharts from 'highcharts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'none' }
  }

  componentDidUpdate() {
    switch (this.state.view) {
      case 'you':
        this.you();
        break;
      case 'software':
        this.software();
        break;
      case 'oop':
        this.oop();
        break;
      case 'ruby':
        this.ruby();
        break;
      case 'rails':
        this.rails();
        break;
      case 'sr_dev':
        this.sr_dev();
        break;
      case 'react':
        this.react();
        break;
      case 'all':
        this.all();
        break;
      case 'first_computer':
        this.first_computer();
        break;
    }
  }

  software() {
    Highcharts.chart('container', {
      chart: {
            type: 'bar'
        },
        title: {
            text: 'First stored procedure executed'
        },
        xAxis: {
          allowDecimals: false,
            categories: ['Software']
        },
        yAxis: {
            allowDecimals: false,
            min: 1948,
            title: {
                text: 'Time in Development'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'You',
            data: [1]
        }, {
            name: 'Software',
            data: [2016]
        }]
    });
  }

  oop() {
    Highcharts.chart('container', {
      chart: {
            type: 'bar'
        },
        title: {
            text: 'First OOP language'
        },
        xAxis: {
          allowDecimals: false,
            categories: ['Simula']
        },
        yAxis: {
            allowDecimals: false,
            min: 1967,
            title: {
                text: 'Time in Development'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'You',
            data: [1]
        }, {
            name: 'Simula',
            data: [2016]
        }]
    });
  }

  ruby() {
    Highcharts.chart('container', {
      chart: {
            type: 'bar'
        },
        title: {
            text: 'Ruby Released'
        },
        xAxis: {
          allowDecimals: false,
            categories: ['Ruby']
        },
        yAxis: {
            allowDecimals: false,
            min: 1993,
            title: {
                text: 'Time in Development'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'You',
            data: [1]
        }, {
            name: 'Ruby',
            data: [2016]
        }]
    });
  }

  rails() {
    Highcharts.chart('container', {
      chart: {
            type: 'bar'
        },
        title: {
            text: 'Rails'
        },
        xAxis: {
          allowDecimals: false,
            categories: ['Rails']
        },
        yAxis: {
            allowDecimals: false,
            min: 2004,
            title: {
                text: 'Time in Development'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'You',
            data: [1]
        }, {
            name: 'Rails',
            data: [2016]
        }]
    });
  }

  sr_dev() {
    Highcharts.chart('container', {
      chart: {
            type: 'bar'
        },
        title: {
            text: 'Sr Dev'
        },
        xAxis: {
          allowDecimals: false,
            categories: ['Sr Dev']
        },
        yAxis: {
            allowDecimals: false,
            min: 2009,
            title: {
                text: 'Time in Development'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'You',
            data: [1]
        }, {
            name: 'Sr Dev',
            data: [2016]
        }]
    });
  }

  react() {
    Highcharts.chart('container', {
      chart: {
            type: 'bar'
        },
        title: {
            text: 'React Released'
        },
        xAxis: {
          allowDecimals: false,
            categories: ['React']
        },
        yAxis: {
            allowDecimals: false,
            min: 2013,
            title: {
                text: 'Time in Development'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'You',
            data: [1]
        }, {
            name: 'React',
            data: [2016]
        }]
    });
  }

  you() {
    Highcharts.chart('container', {
      chart: {
            type: 'bar'
        },
        title: {
            text: 'You as a developer'
        },
        xAxis: {
          allowDecimals: false,
            categories: ['You']
        },
        yAxis: {
            allowDecimals: false,
            min: 2016,
            title: {
                text: 'Time in Development'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'You',
            data: [2017]
        }]
    });
  }

  all() {
    Highcharts.chart('container', {
      chart: {
            type: 'bar'
        },
        title: {
            text: 'All'
        },
        xAxis: {
            categories: ['All']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Comparing All'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
          name: 'You',
          data: [1]
        },
        {
          name: 'React',
          data: [3]
        },
        {
          name: 'SR Dev',
          data: [7]
        },
        {
          name: 'Rails',
          data: [2016 - 2004]
        },
        {
          name: 'Ruby',
          data: [2016 - 1993]
        },
        {
            name: 'OOP',
            data: [2016 - 1967]
        }, {
            name: 'Software',
            data: [2016-1948]
        }]
    });
  }


  first_computer() {
    Highcharts.chart('container', {
      chart: {
            type: 'bar'
        },
        title: {
            text: 'First Computer'
        },
        xAxis: {
            categories: ['All']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'First Computer'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
          name: 'You',
          data: [1]
        },
        {
          name: 'React',
          data: [3]
        },
        {
          name: 'SR Dev',
          data: [7]
        },
        {
          name: 'Rails',
          data: [2016 - 2004]
        },
        {
          name: 'Ruby',
          data: [2016 - 1993]
        },
        {
            name: 'OOP',
            data: [2016 - 1967]
        }, {
            name: 'Software',
            data: [2016-1948]
        }, {
          name: 'First Computer',
          data: [2016-1822]
        }]
    });
  }

  changeChart(view) {
    this.setState({ view });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <hr />
        </div>
        <button onClick={() => this.changeChart('you') } className="btn col s4 deep-purple">You</button>
        <button onClick={() => this.changeChart('software') } className="btn col s4 deep-purple">Software</button>
        <button onClick={() => this.changeChart('oop') } className="btn col s4 deep-purple">OOP</button>
        <button onClick={() => this.changeChart('ruby') } className="btn col s4 deep-purple">Ruby</button>
        <button onClick={() => this.changeChart('rails') } className="btn col s4 deep-purple">Rails</button>
        <button onClick={() => this.changeChart('sr_dev') } className="btn col s4 deep-purple">Sr Dev</button>
        <button onClick={() => this.changeChart('react') } className="btn col s4 deep-purple">React</button>
        <button onClick={() => this.changeChart('all') } className="btn col s4 deep-purple">All</button>
        <button onClick={() => this.changeChart('first_computer') } className="btn col s4 deep-purple">?</button>
        <div className="col s12">
          <hr />
        </div>
        <div className="col s12" id="container">
        </div>
      </div>
    )
  }
}

export default App;

