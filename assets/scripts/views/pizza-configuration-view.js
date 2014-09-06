'use strict';

var $          = require('jquery');
var Handlebars = require('handlebars');

var PizzaConfigurationView = function(model, next) {
  this.model = model;
  this.render();
  this.next = next;
};

PizzaConfigurationView.prototype = {
  render: function() {
    if (!this.$el) {
      var template = Handlebars.compile($('#pizza-configuration-template').html());
      this.$el = $(template(this.model));
      this.registerEvents();
    }
  },

  registerEvents: function() {
    var model     = this.model;
    var next      = this.next;
    var $form     = this.$el.find('form');
    var $toppings = this.$el.find('input[name="toppings"]');
    var $extras   = this.$el.find('input[name="extras"]');
    var $cheese   = this.$el.find('input[name="cheese"]');
    var $sizes    = this.$el.find('input[name="size"]');

    $toppings.on('change', function() {
      model.toppings = $('input[name="toppings"]:checked')
        .toArray()
        .map(function(element) {
          return element.value;
        });
    });

    $extras.on('change', function() {
      model.extras = $('input[name="extras"]:checked')
        .toArray()
        .map(function(element) {
          return element.value;
        });
    });

    $cheese.on('change', function() {
      model.cheese = $('input[name="cheese"]:checked').val();
    });

    $sizes.on('change', function() {
      model.size = $('input[name="size"]:checked').val();
    });

    $form.on('submit', function(e) {
      if (next) {
        e.preventDefault();
        next(model);
      }
    });
  }
};

module.exports = PizzaConfigurationView;
