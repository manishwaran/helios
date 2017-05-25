import Mercury from 'mercury';
import { observer } from 'mobx-react';
import React, { Component } from 'react';

import './style.scss';
import propTypes from './proptypes';
import { HTMLStore } from '../../stores';
import { HTMLAction } from '../../actions';
import { PageFrame } from '../../components';

@observer
export default class StartPage extends Component {

  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.htmlAction = new HTMLAction();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const iframeDocument = document.querySelector('iframe').contentDocument;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const mercury = new Mercury(iframeDocument, { screenWidth, screenHeight });
    const block = mercury.getContentBlock();
    const blockElement = iframeDocument.querySelector(block.selector);
    const blockHTML = blockElement.innerHTML;
    this.htmlAction.updateHTML(blockHTML);
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
