import { observer } from 'mobx-react';
import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
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
      browserHistory.push('/input');
    }
  }

  render() {
    const title = (
      <div className="title">
        Helios
      </div>
    );
    const appbar = (
      <AppBar title={title} showMenuIconButton={false} style={{ paddingLeft: 10 }} />
    );

    const appbarView = this.props.location.pathname !== '/view-html/'
      ? appbar
      : null;

    return (
      <div className="view-start-page">
        {appbarView}
        {this.props.children}
        <Toast show={UtilsStore.SHOW_TOAST} message={UtilsStore.TOAST_MESSAGE} />
      </div>
    );
  }

}
