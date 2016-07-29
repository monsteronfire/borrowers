import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      console.log('+- save action in edit-form component');
    },
    cancel() {
      console.log('+- cancel action in edit-form component');
    }
  }
});
