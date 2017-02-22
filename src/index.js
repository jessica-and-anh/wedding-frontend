import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactGA from 'react-ga';
import configureStore from './app/containers/configure-store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MediaQuery from 'react-responsive';

import Navigation from './app/components/nav';
import Dialog from './app/containers/dialog';
import Homepage from './app/components/Homepage';
import RsvpConfirmation from './app/containers/rsvp-confirmation';

import 'scroll-restoration-polyfill';

history.scrollRestoration = 'manual';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Google analytics
ReactGA.initialize('UA-000000-01');
function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const store = configureStore();

const muiTheme = getMuiTheme({
  checkbox: {
    checkedColor: '#44a5c9',
  },
});

const Application = React.createClass({
  render() {
    const pathname = this.props.location.pathname;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <div className="App">
            <MediaQuery minDeviceWidth={1224}>
              <Navigation pathname={pathname} />
            </MediaQuery>
            {this.props.children}
            <Dialog />
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
});

ReactDOM.render(
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path="/" component={Application}>
      <IndexRoute component={Homepage} />
      <Route path="rsvp-confirmation" component={RsvpConfirmation} />
      <Route path="rsvp-confirmation/:id" component={RsvpConfirmation} />
    </Route>
  </Router>,
  document.getElementById('root')
);
