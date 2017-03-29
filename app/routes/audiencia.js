import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.peekRecord('audiencia', params.id);
  },

  setupController(controller, model) {
    this._super(controller, model);
  }
});
