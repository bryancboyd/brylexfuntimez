import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './Page';

const Views = {
  BRYAN: 'BRYAN_VIEW',
  ALEX: 'ALEX_VIEW',
  SARA: 'SARA_VIEW',
  MICHELLE: 'MICHELLE_VIEW',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: Views.ALEX,
      a: {
        b: {
          c: {
            d: 'hello',
          },
        },
      },
    };
  };

  render = () => {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Brylex FUN TIMEZ</h1>
        </header>
        { Object.keys(Views).map(v => (
          <button onClick={() => this.setState({ view: Views[v] })}>{v}</button>
        ) )}
        <p className="App-intro">
          <Page
            title={this.state.view}
            content={(
              <div style={{ color: 'red' }}>
                { this.state.view.split('').map(i => i + i + i + i + i).join('') }
              </div>
            )}
          />
        </p>
      </div>
    );
  }
}

export default App;
