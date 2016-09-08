import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from '../config/environment';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: config.host
});
