import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findAll('story', params.story_id);
  }
});
