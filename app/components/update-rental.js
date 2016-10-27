import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    updateRentalForm() {
    this.set('updateRentalForm', true);
    },

    update(rental) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms')
      };
      this.set('updateRentalForm', false);
      console.log("step 1");
      debugger;
      this.sendAction('update', rental, params);
    }
  }
});
