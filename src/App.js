import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Artists from './components/Artists';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/artists/:artistid" component={Artists}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
