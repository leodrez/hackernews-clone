import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  name: 'string',
  title: 'string'
});

/*
export default Model.extend({
  url: 'string',
  title: 'string',
  score: 'number',
  createdAt: 'date',
  user: belongsTo(),
  comments: hasMany()
});
*/
