import URL from 'url';
import request from 'request';
import iconv from 'iconv-lite';

import config from '../../config';

export default class PageFetcher {

  constructor() {
    this.turboUrl = this.constructTurboUrl(config.turbo);
    this.get = this.get.bind(this);
  }

  constructTurboUrl(urlComponents) {
    return URL.format({
      protocol: 'http:',
      hostname: urlComponents.host,
      port: urlComponents.port,
      pathname: urlComponents.fetchUrl,
    });
  }

  requestHTMLPage(reqSettings) {
    return new Promise((resolve, reject) => {
      request(reqSettings, (error, response) => {
        if (error) return reject('Error in getting the requested page.');
        return resolve(response);
      });
    });
  }

  fetchPage(siteUrl, ondemand) {
    let url = siteUrl;
    if (ondemand) {
      url = `${this.turboUrl}?url=${encodeURIComponent(url)}`;
    }
    const reqSettings = {
      url,
      headers: { 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.114 Safari/537.36' },
      encoding: null,
    };

    return this.requestHTMLPage(reqSettings)
    .then(response => iconv.decode(response.body, 'utf-8'))
    .then(html => html)
    .catch((err) => {
      console.log(err);
      return { message: 'failed to fetch url' };
    });
  }

  get(req, res) {
    const siteUrl = req.query.url;
    const ondemand = req.query.ondemand;
    this.fetchPage(siteUrl, ondemand)
    .then(html => res.status(200).send(JSON.stringify({ html, message: 'HTML page fetched.' })))
    .catch(err => res.status(500).send(JSON.stringify({ serverError: err.message })));
  }

}
