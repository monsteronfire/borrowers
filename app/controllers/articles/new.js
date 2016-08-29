import Ember from 'ember';

export default Ember.Controller.extend({
  save(model) {
    console.log('Save action called in articles new');
  },

  cancel() {
    console.log('cancel action called in articles new');
  }
});
