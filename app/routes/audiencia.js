import Ember from 'ember';
import AutoReload from 'ember-data-autoreload';

export default Ember.Route.extend(AutoReload, {
  spreadsheet: Ember.inject.service(),

  autoReloadDelay: 5000,

  autoReloadStrategy: 'fixed',

  isLoaded: true,

  audienciaId: null,

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

    console.log('Got a change!');

    newSnapshot.attributes().forEach((item) => {
      if (!oldSnapshot.attributes().findBy('id', item.id)) {
        this.controller.model.preguntasRespuestas.addObject(item);
      }
    });
  },

  reload() {
    console.log('Reloading');

    let audienciaId = this.get('audienciaId');

    // TODO: Avoid overwriting the whole object
    return this.get('spreadsheet').fetch(`audiencia-${audienciaId}`).then((result) => {
      this.set('currentSnapshot', Ember.Object.create({
        attributes() {
          return Ember.A(result);
        }
      }));
    });
  },

  _createSnapshot() {
    console.log('Creating snapshot');

    return this.get('currentSnapshot');
  },

  model(params) {
    let spreadsheet = this.get('spreadsheet');
    let audiencia = this.store.peekRecord('audiencia', params.id);

    this.set('audienciaId', params.id);

    return Ember.RSVP.hash({
      audiencia: audiencia,
      preguntasRespuestas: spreadsheet
        .fetch(`audiencia-${params.id}`)
        .then((result) => {
          return Ember.A(result);
        })
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    this.startAutoReloading();
  },

  willTransition() {
    this.stopAutoReloading();
  }
});
