define([
    'jquery',
    'underscore',
    'backbone',
    'models/MovieModel',
    'text!templates/movieTemplate.html'
],function($,_,Backbone,Moviemodel,movieTemplate){
    var Moviesview= Backbone.View.extend({
        //el: $('.content'),
        tagName:'div',
        className:'box',
//        attributes:{
//         id:'bb-'+this.model.cid   
//        },
        events : {
            'click': 'abd'
            
        },
        abd: function(){ debugger; alert('world');},
        initialize: function(){
            
        },
        render: function(){
            debugger;
            var data= {moviemodel: this.model.toJSON(), _:_ };
            
            var compiledTemplate =_.template(movieTemplate);
             compiledTemplate= compiledTemplate(data);
            this.$el.html(compiledTemplate);
            //console.log('this.el',this.el);
            //console.log('this.$el',this.$el); 
             //this.delegateEvents(this.events);
            return this;
        }
    });
    return Moviesview;
});