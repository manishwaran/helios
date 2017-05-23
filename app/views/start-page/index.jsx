import { observer } from 'mobx-react';
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router';

import './style.scss';
import propTypes from './proptypes';
import { Toast } from '../../components';
import { UtilsStore } from '../../stores';

@observer
export default class StartPage extends Component {

  static propTypes = propTypes;

  componentWillMount() {
    if (this.props.location.pathname === '/') {
      browserHistory.push('/app');
    }
  }

  render() {
    const title = (
      <div className="title col-sm-2">
        Helios
      </div>
    );
    return (
      <div className="view-start-page">
        <AppBar title={title} showMenuIconButton={false} style={{ paddingLeft: 10 }} />
        {this.props.children}
        <Toast show={UtilsStore.SHOW_TOAST} message={UtilsStore.TOAST_MESSAGE} />
      </div>
    );
  }

}
