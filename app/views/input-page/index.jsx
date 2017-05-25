import { observer } from 'mobx-react';
import React, { Component } from 'react';

import './style.scss';
import propTypes from './proptypes';
import { HTMLAction } from '../../actions';

@observer
export default class StartPage extends Component {

  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.inputAction = new HTMLAction();
    this.state = {
      url: 'http://www.gpsdiscount.com/gpsdiscount/cart.php?m=product_detail&p=22306',
    };
  }

  onClick() {
    if (this.state.url) {
      this.inputAction.getHTML(this.state.url);
    }
  }

  onChange(event) {
    const url = event.target.value;
    this.setState({ url });
  }

  render() {
    return (
      <div className="view-input-page">
        <div className="input-holder">
          <p className="input-label">Enter Url</p>
          <div className="field-holder">
            <input
              className="input-field"
              type="text"
              value={this.state.url}
              onChange={this.onChange}
            />
            <button
              type="button"
              className="start-analyse"
              onClick={this.onClick}
            >
              Go!
            </button>
          </div>
        </div>
      </div>
    );
  }

}
