import { observer } from 'mobx-react';
import React, { Component } from 'react';

import './style.scss';
import propTypes from './proptypes';
import { HTMLStore } from '../../stores';
import { PageFrame } from '../../components';

@observer
export default class StartPage extends Component {

  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div className="view-html-page">
        <PageFrame
          iframeSource={HTMLStore.HTML}
        />
        <button
          type="button"
          className="next-action"
          onClick={this.onClick}
        >
          Next
        </button>
      </div>
    );
  }

}
