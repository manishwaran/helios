import fetch from 'isomorphic-fetch';

import ServiceUtils from '../service-utils';

export default class HTMLService extends ServiceUtils {

  constructor(props) {
    super(props);
    this.getHTML = this.getHTML.bind(this);
  }

  getHTML(url) {
    return new Promise((resolve, reject) => {
      fetch(`/helios/get-html?url=${url}&ondemand=true`, {
        method: 'GET',
        credentials: 'same-origin',
      })
      .then(this.checkForError)
      .then(resolve)
      .catch(reject);
    });
  }

}
