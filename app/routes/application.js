import Ember from 'ember';

export default Ember.Route.extend({
  spreadsheet: Ember.inject.service(),

  model() {
    return this.store.findAll('audiencia');
  },

  setupController(controller, model) {
    this._super(controller, model);
  }
});
