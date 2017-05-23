import { action } from 'mobx';

import ActionUtils from '../utils';
import { HTMLStore } from '../../stores';
import { HTMLService } from '../../service';

export default class ExpensesActions {

  constructor() {
    this.htmlService = new HTMLService();
    this.getHTML = this.getHTML.bind(this);
  }

  @action('Update HTML')
  updateHTML(html) {
    console.log(html);
    HTMLStore.HTML = html || '';
  }

  getHTML(url) {
    ActionUtils.setToastMessage(true, false, 'Fetching HTML');
    this.htmlService.getHTML(url)
    .then(this.updateHTML)
    .catch((err) => {
      ActionUtils.setToastMessage(false, false, err.serverError);
      this.updateExpenses();
    });
  }

}
