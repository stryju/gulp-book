'use strict';

var $ = require('jquery');

var PizzaConfiguration = function(attrs) {
  $.extend(this, attrs);
};

PizzaConfiguration.prototype = {
  availableSizes: {
    'small': { label: 'Small (25cm)', price: 400 },
    'medium': { label: 'Medium (28cm)', price: 500 },
    'large': { label: 'Large (32cm)', price: 600 }
  },
  availableCheese: {
    'normal': { label: 'Normal', price: 0 },
    'mozzarella': { label: 'Mozzarella', price: 100 }
  },
  availableToppings: {
    'tomatoes': { label: 'Tomatoes', price: 100 },
    'salami': { label: 'Salami', price: 100 },
    'ham': { label: 'Ham', price: 100 },
    'pepperoni': { label: 'Pepperoni', price: 100 },
    'onions': { label: 'Onions', price: 100 },
    'fried-onions': { label: 'Fried Onions', price: 100 },
    'tuna': { label: 'Tuna', price: 100 }
  },
  availableExtras: {
    'cheese-crust': { label: 'Cheese Crust', price: 200 }
  },
  change: function() {
    console.log('changed', this);
  },
  validate: function() {
    var errors = {};

    if (!this.size || !this.availableSizes[this.cheese]) {
      errors.size = 'You must select a pizza size';
    }

    if (!this.cheese || !this.availableCheese[this.cheese]) {
      errors.cheese = 'There is no pizza without cheese';
    }

    if (Object.keys(errors).length < 1) {
      return false;
    }

    return errors;
  }
};

module.exports = PizzaConfiguration;
