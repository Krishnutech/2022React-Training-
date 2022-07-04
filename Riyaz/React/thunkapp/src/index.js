import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import store from './store'


import {Provider} from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
 render() {
    return (
      <Provider store={store}>
      <div>
        <Hello name={this.state.name} />
      
      </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
