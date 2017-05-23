import mobx from 'mobx';
import React from 'react';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { StartPage, HTMLPage, InputPage } from './views';

mobx.useStrict(true);
injectTapEventPlugin();

render((
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Router history={browserHistory}>
      <Route path="/" component={StartPage}>
        <Route path="input" component={InputPage} />
        <Route path="view-html" component={HTMLPage} />
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('helios-app'));
