import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Component/Home';
import Header from './Component/Header';
import DriverPage from './Component/DriverPage';
import PassengerPage from './Component/PassengerPage';
import PassengerAddress from './Component/PassengerAddress';
import TokenKeyPage from './Component/TokenKeyPage';
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/passengerPage" component={PassengerPage} />
        <Route path="/passengerAddress" component={PassengerAddress} />
        <Route path="/TokenKeyPage" component={TokenKeyPage} />
        <Route path="/driverPage" component={DriverPage} />
        <Route  component={Home} />
      </Switch>
      </Router>
  );
}

export default App;
