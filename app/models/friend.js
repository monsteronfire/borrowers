import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';
import changeGate from 'ember-computed-change-gate/change-gate';

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  twitter: attr('string'),
  loans: hasMany('loan'),

  fullName: Ember.computed('firstName', 'lastName', {
    get() {
      return `${this.get('firstName')} ${this.get('lastName')}`;
    }
  })

  //capitalizeFirstName: changeGate('firstName', function (firstName) {
    //return Ember.String.capitalize(firstName);
  //})
});
