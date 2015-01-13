import superagent from 'superagent';
import apiKey from './key.js';
const apiRoot = 'https://api.500px.com/v1/';

export default {

  name: '500px',

  read(req, resource, params, config, callback) {
    const url = `${apiRoot}/photos?consumer_key=${apiKey}`;
    superagent.get(url).end((err, res) => {
      const photos = !err ? res.body.photos : null;
      callback(err, photos);
    });
  }

};