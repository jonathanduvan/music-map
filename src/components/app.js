import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './about';
import RedirectPage from './RedirectPage';
import FallBack from './fallback';
import Nav from './nav';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expiryTime: '0',
    };
  }

  componentDidMount() {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
    } catch (error) {
      expiryTime = '0';
    }
    this.setState({ expiryTime });
  }

  setExpiryTime = (expiryTime) => {
    this.setState({ expiryTime });
  };

  isValidSession = () => {
    const currentTime = new Date().getTime();
    const { expiryTime } = this.state;
    const isSessionValid = currentTime < expiryTime;

    return isSessionValid;
  };

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/dashboard"
              render={(props) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <Dashboard isValidSession={this.isValidSession} {...props} />
              )}
            />            <Route path="/redirect" component={RedirectPage} />
            <Route path="/about" component={About} />
            <Route component={FallBack} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
