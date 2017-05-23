import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import './style.scss';
import propTypes from './proptypes';

@observer
export default class StartPage extends Component {

  static propTypes = propTypes;

  componentWillMount() {
    if (this.props.location.pathname === '/') {
      browserHistory.push('/app');
    }
  }

  render() {
    return (
      <div className="view-html-page">
        Html page fetch happens here
      </div>
    );
  }

}
