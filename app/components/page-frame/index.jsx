import { observer } from 'mobx-react';
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

import './style.scss';
import propTypes from './proptypes';
import defaultProps from './default-props';

@observer
export default class PageFrame extends Component {

  static defaultProps = defaultProps;
  static propTypes = propTypes;

  render() {
    const loadingClass = this.props.isHtmlLoading ? 'loading' : '';
    const reload = <span>Reload </span>;
    const editSettings = <span>Edit settings </span>;
    const fetchingHtml = <p>Fetching HTML via Turbo</p>;
    const turboError = (
      <div>
        <p>Turbo seems to be running out of breath. Give him another shot!</p>
        <FlatButton className="btn" label={reload} onClick={this.props.reloadHTMLPage} />
        <FlatButton className="btn" label={editSettings} onClick={this.props.handleSettingsBar} />
      </div>
    );
    const iframe = (
      <iframe
        srcDoc={this.props.iframeSource}
        className="col col-sm-12 iframe"
        sandbox="allow-same-origin allow-scripts"
        seamless
      />
    );
    const placeHolder = (
      <div className="empty-response" >
        <div className="text-xs-center empty-response-content">
          <i className={`nc-icon-outline nature_turtle mascot ${loadingClass}`} />
          { this.props.isHtmlLoading ? fetchingHtml : turboError }
        </div>
      </div>
    );
    const cssSelector = this.props.cssSelector && (
      <div className="css-selector">
        {this.props.cssSelector}
      </div>
    );

    return (
      <div className="component-pageframe">
        { this.props.iframeSource ? iframe : placeHolder }
        { cssSelector && cssSelector }
      </div>
    );
  }

}
