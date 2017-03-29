import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  nombre: DS.attr(),
  fecha: DS.attr('date'),
  youtubeId: DS.attr(),
  thumbMedium: DS.attr(),
  enableQuestionStream: DS.attr('number'),
  getEnableQuestionStream: Ember.computed.bool('enableQuestionStream')
});
