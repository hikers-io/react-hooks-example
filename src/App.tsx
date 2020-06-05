import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import home from './components/home/Home';
import converter from './components/converter/Converter';
import wallet from './components/wallet/Wallet';
import ExhangeProvider from './providers/ExchangeProvider';


const App = () => (
  <ExhangeProvider>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/converter" component={converter} />
          <Route path="/wallet" component={wallet} />
          <Route path="/" component={home} />
        </Switch>
      </div>
    </Router>
  </ExhangeProvider>
);


export default App;
