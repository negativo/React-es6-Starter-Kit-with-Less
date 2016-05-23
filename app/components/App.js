import React, { Component } from 'react';

require('./../styles/App.less');

export default class App extends Component {
  render() {
    return (<div key="app" className="app-container">
    	{this.props.children}
    </div>);
  }
}


