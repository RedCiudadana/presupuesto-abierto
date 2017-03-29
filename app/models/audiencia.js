import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr(),
  fecha: DS.attr('date'),
  youtubeId: DS.attr(),
  thumbMedium: DS.attr(),
  enableQuestionStream: DS.attr('boolean', defaultValue: false)
});
