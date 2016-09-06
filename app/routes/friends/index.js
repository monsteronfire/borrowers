import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //return this.store.query('friend', {include: 'loans, loans.article'});
    return this.store.query('friend', {include: 'loans'});
  }
});
