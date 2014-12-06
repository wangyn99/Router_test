

if(Meteor.isClient){
  
  //create a custom RouteController "ApplicaiotnController" like this: 
  //ApplicaiotnController = RouteController.extend();
  
  ApplicationController = RouteController.extend({
    layoutTemplate: 'AppLayout',
    
    onBeforeAction: function(){
      //do some logic checks or other custom logic
      console.log('app before hook!');
      this.next();
    },
    action: function(){
      console.log('this should be overridden!');
    }
  });
  
  //inherit from other RouteControllers to model your application's behavior
  //you can separate your route logic into RouteController files instead of putting all of your complex business logic into one big route file.
  
  HomeController = ApplicationController.extend({
    action: function(){
      //'this' is an instance of a 'RouteController'
      this.render('Home');
    }
  });
  
  //inherit from 'ApplicaiotnController' and override any behavior you'd like.
  PostController = ApplicationController.extend({
    show: function(){
      this.render('PostShow');
    },
    index: function(){
      this.render('PostIndex');
    }
  });
  
}Router.route('/', {
  name: 'Home'
});

Router.route('/posts', {
  //tell the route to use which controller
  controller: 'PostController',
  action: 'index'
});

Router.route('/posts/:_id',{
  controller: 'PostController',
  action: 'show'
});


