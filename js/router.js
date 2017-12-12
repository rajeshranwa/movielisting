define([
    'jquery',
    'underscore',
    'backbone',
    'views/movieview',
    'views/showmovieslist',
    'collections/MoviesCollection'
],function($,_,Backbone,Moviesview,Movielistview,Moviescollection){
    var AppRouter= Backbone.Router.extend({
        routes:{
            'movies':'showMovies',
            '*actions':'defaultAction'
        }
    });
    var initialize= function(){
        var app_router= new AppRouter;
        app_router.on('route:showMovies',function(){
            //Call render on the module we loaded in via the dependency array
            console.log("calling showMovies render() from router");
            alert('showMovies router');
            var movieview= new Moviesview();
            movieview.render();
            
            
        });
        app_router.on('route:defaultAction',function(){
            // We have no matching route, lets display the home page 
            console.log('No route, so routing to Home Page');
//            var movieview= new Moviesview();
//            movieview.render();
            var cl= new Moviescollection();
            var movielistview= new Movielistview({ collection : cl});
            
        });
        Backbone.history.start();
    };
    return {initialize:initialize};
});
console.log('inside router js');