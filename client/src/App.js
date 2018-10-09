import React, { Component } from 'react';
import './App.css';
import CatechismAnswers from './components/catechismAnswers';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Westminster Catechisms</h1>
        </header>
        <CatechismAnswers />
        
        <Typography variant="caption" gutterBottom>
        <i>Referenced from <a href="http://www.shortercatechism.com/">shortercatechism.com</a></i> | 
          Application built by <a href="http://mhansolbaek.com">Michael Baek</a>
      </Typography>
        
      </div>
    );
  }
}

export default App;
