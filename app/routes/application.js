import Ember from 'ember';

export default Ember.Route.extend({
  spreadsheet: Ember.inject.service(),

  model() {
    const spreadsheet = this.get('spreadsheets');

    return spreadsheet.fetch('audiencias')
  },

  setupController(controller, model) {
    this._super(controller, model);
  }
});
