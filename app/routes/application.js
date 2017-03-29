import Ember from 'ember';
import AutoReload from 'ember-data-autoreload';

export default Ember.Route.extend(AutoReload, {
  spreadsheet: Ember.inject.service(),

  autoReloadDelay: 5000,

  autoReloadStrategy: 'fixed',

  isLoaded: true,

  currentSnapshot: Ember.Object.create({
    attributes() {
      return Ember.A({});
    }
  }),

  didAutoReload(attributesChanged, newSnapshot, oldSnapshot) {
    if (!attributesChanged) {
      console.log('Nothing happened');

      return;
    }

    console.log('Got a change');

    newSnapshot.attributes().forEach((item) => {
      if (!this.store.hasRecordForId('audiencia', item.id)) {
        this.store.createRecord('audiencia', item);
      }
    });
  },

  reload() {
    console.log('reloading');

    return this.get('spreadsheet').fetch('audiencia').then((result) => {
      this.set('currentSnapshot', Ember.Object.create({
        attributes() {
          return Ember.A(result);
        }
      }));
    });
  },

  _createSnapshot() {
    console.log('creating snapshot');

    return this.get('currentSnapshot');
  },

  model() {
    return this.store.findAll('audiencia');
  },

  setupController(controller, model) {
    this._super(controller, model);

    this.startAutoReloading();
  }
});
