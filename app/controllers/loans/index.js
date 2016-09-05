import Ember from 'ember';

export default Ember.Controller.extend({
  save(loan) {
    return loan.save();
  },
  contentDidChange: Ember.observer('model.[]', function () {
    console.log('Called when we add or remove a loan');
  }),

  stateDidChange: Ember.observer('model.@each.returned', function () {
    console.log('Called when the state property changes for any of the loans');
  })
});
