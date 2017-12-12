define([
    'jquery',
    'underscore',
    'backbone'
],function($,_,Backbone){
    var detailedview= Backbone.View.extend({
        el:$('.allviews'),
        initialize: function(){
            
        },
        render: function(modal){
            this.$el.append('<div><p>Hello , How are you?</p></div>');
            return this;
        }
    });
    return detailedview;
});