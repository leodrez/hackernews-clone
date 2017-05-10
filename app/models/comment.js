import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  user: DS.belongsTo('user'),
  story: DS.belongsTo('story'),
  createdAt: DS.attr('date')
});
