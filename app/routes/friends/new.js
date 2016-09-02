import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },

  activate() {
    console.log('----- activate hook called -----');
  },

  deactivate() {
    console.log('----- deactivate hook called -----');
  },

  resetController: function (controller, isExiting, transition) {
    if(isExiting) {
      console.log('----- resetController hook called -----');
      var model = controller.get('model');

      if (model.get('isNew') ) {
        model.destroyRecord();
      }
    }
  }
});
