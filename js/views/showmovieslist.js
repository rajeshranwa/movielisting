define([
    'jquery',
    'underscore',
    'backbone',
    'models/MovieModel',
    'views/movieview',
    'views/detailedmovieview'
],function($,_,Backbone,Moviemodel,Movieview,Detailedmovieview){
   
    var Movieslistview= Backbone.View.extend({
        //tagName:'div',
        el: $('.content'),
//        events:{
//          'click .box': 'abc',  
//        },
//        abc: function(){ 
//            alert('hello');debugger;
//            var x= new Detailedmovieview();
//            x.render(this);
//            
//        },
        initialize: function(){
            var that= this;
            this.collection.fetch({success: function(collection,response){
                 that.render();                
                },
                error: function(){
                    alert('failed!');
                    }});
        //this.collection.bind("reset", _.bind(this.render, this));    
        },
        render: function(){
            
            this.collection.each(function(row){ 
                
                console.log('row='+row.toJSON());
                var temp= new Movieview({model:row});
                console.log('temp.render().$el ',temp.render().el);
                this.$el.append(temp.render().el);
                
                
                
            },this);
            /*
            debugger;
            var length=this.collection.length;
            for(var i=0;i<2&&i<length;i++){
                row=this.collection.models[i];
                console.log('row='+this.collection.models[i].toJSON());
                var temp= new Movieview({model:row});
                this.$el.append(temp.render().el);
            }*/
                
            return this;
        }
    });
 
    
    return Movieslistview;
});