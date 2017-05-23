import fetch from 'isomorphic-fetch';

import ServiceUtils from '../service-utils';

export default class HTMLService extends ServiceUtils {

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
