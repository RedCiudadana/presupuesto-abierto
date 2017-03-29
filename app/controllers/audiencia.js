import Ember from 'ember';

export default Ember.Controller.extend({
  sortingProperties: ['id:desc'],
  preguntasRespuestasOrdenadas: Ember.computed.sort(
    'model.preguntasRespuestas',
    'sortingProperties'
  ),
});
