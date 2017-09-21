import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import ArtistList from './artists/ArtistList';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <h1>React Music Browser</h1>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/artists" component={ArtistList} />
            <Route  path="/about" component={About} />
        </Switch>
      </main>
    );
  }
}

export default App;
