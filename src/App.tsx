import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import home from './components/home/home';
import converter from './components/converter/converter';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/converter" component={converter} />
          <Route path="/" component={home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
