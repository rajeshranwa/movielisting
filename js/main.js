require.config({
    shim:{
        'backbone':{
            deps:['underscore','jquery'],
            exports:'Backbone'
        }
    },
   paths:{
       jquery:'libs/jquery-min',
       underscore:'libs/underscore-min',
       backbone: 'libs/backbone-min',
       templates:'../templates'
   },
    waitSeconds: 0

});

require([
    'app'
],function(App){
    App.initialize(); 
});

console.log('main.js executed');