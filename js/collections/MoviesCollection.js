define([
    'jquery',
    'underscore',
    'backbone',
    'models/MovieModel'
],function($,_,Backbone,Moviemodel){
    
    var MoviesCollection= Backbone.Collection.extend({
        model: Moviemodel,
        url: '/js/resource/data.txt'
    });
    console.log('Creating movie collection');
    return MoviesCollection;

});