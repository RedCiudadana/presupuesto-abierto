import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  nombre: DS.attr(),
  fecha: DS.attr('date'),
  youtubeId: DS.attr(),
  facebookVideoUrl: DS.attr(),
  thumbMedium: DS.attr(),
  enableQuestionStream: DS.attr('number'),
  getEnableQuestionStream: Ember.computed.bool('enableQuestionStream'),
  slideshareUrl: DS.attr(),
  twitterHashtag: DS.attr(),
  twitterTimelineTag: DS.attr(),
  facebookCommentsUrl: DS.attr(),
  visible: DS.attr('boolean')
});
