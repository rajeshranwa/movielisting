define([
    'underscore',
    'backbone'
],function(_,Backbone){
    var MovieModel= Backbone.Model.extend({
        defaults:{
            movie_title:"",
            director_name:"",
            actor_1_name:"",
            actor_2_name:"",
            genres:"",
            language:"",
            country:"",
            content_rating:"",
            budget:"",
            title_year:"",
            plot_keywords:"",
            movie_imdb_link:""
   
        },
        initialize: function(options){
            this.movie_title=options.movie_title;
            this.director_name=options.director_name;
            this.actor_1_name=options.actor_1_name;
            this.actor_2_name=options.actor_2_name;
            this.genres=options.genres;
            this.language=options.language;
            this.country=options.country;
            this.content_rating=options.content_rating;
            this.budget=options.budget;
            this.title_year=options.title_year;
            this.plot_keywords=options.plot_keywords;
            this.movie_imdb_link=options.movie_imdb_link;
        }
    });
    //console.log(MovieModel);
    return MovieModel;
});
