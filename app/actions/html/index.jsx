import { action } from 'mobx';
import { browserHistory } from 'react-router';

import ActionUtils from '../utils';
import { HTMLStore } from '../../stores';
import { HTMLService } from '../../service';

export default class ExpensesActions {

  constructor() {
    this.htmlService = new HTMLService();
    this.getHTML = this.getHTML.bind(this);
  }

  @action('Update HTML')
  updateHTML(html, url) {
    if (html) {
      browserHistory.push(`/view-html/?url=${url}`);
      HTMLStore.HTML = html;
    } else {
      HTMLStore.HTML = '';
    }
  }

  getHTML(url) {
    ActionUtils.setToastMessage(true, false, 'Fetching HTML');
    this.htmlService.getHTML(encodeURIComponent(url))
    .then(response => this.updateHTML(response.html, url))
    .catch((err) => {
      ActionUtils.setToastMessage(false, false, err.serverError);
      this.updateHTML();
    });
  }

}
