'use strict';

require('./handlebars-helpers');
var $ = require('jquery');
var PizzaConfigurationView = require('./views/pizza-configuration-view');
var PizzaConfiguration = require('./models/pizza-configuration');

$(document).ready(function() {
  loadPizzaConfiguration();
});

function loadPizzaConfiguration(pizzaConfiguration) {
  pizzaConfiguration = pizzaConfiguration || new PizzaConfiguration({
    size: 'medium',
    cheese: 'normal',
    toppings: ['tomatoes', 'salami']
  });

  var pizzaConfigurationView = new PizzaConfigurationView(pizzaConfiguration, loadOrderConfirmation);
  $('#main').html(pizzaConfigurationView.$el);
}

function loadOrderConfirmation(pizzaConfiguration) {
  console.log('loading order confirmation', pizzaConfiguration);
}
