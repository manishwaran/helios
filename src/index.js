import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import config from '../config';
import PageFetcher from './page-fetch';

const app = express();
const pageFetcher = new PageFetcher();

app.use('/', express.static(path.join(__dirname, '/app')));
app.use('/:pathname', express.static(path.join(__dirname, '/app')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/helios/get-html', pageFetcher.get);

app.listen(config.server.port, () => {
  console.log(`listening to host: ${config.server.host} at port: ${config.server.port}`);
});
