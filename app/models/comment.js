import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr('string')
});

/*
export default DS.Model.extend({
  text: DS.attr('string'),
  user: DS.belongsTo('user'),
  story: DS.belongsTo('story'),
  createdAt: DS.attr('date')
});
*/
