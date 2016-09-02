import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },

  resetController(controller, isExiting) {
    if(isExiting) {
      var model = controller.get('model');
      model.rollback();
    }
  }
});
