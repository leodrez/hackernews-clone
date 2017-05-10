import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  text: 'string',
  user: belongsTo(),
  story: belongsTo(),
  createdAt: 'date'
});
