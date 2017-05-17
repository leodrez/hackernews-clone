import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string')
});

/*
export default DS.Model.extend({
  url: DS.attr('string'),
  title: DS.attr('string'),
  score: DS.attr('number'),
  createdAt: DS.attr('date'),
  user: DS.belongsTo('user'),
  comments: DS.hasMany('comment')
});
*/
