Router.route('/', {
  name: 'home'
});

Router.route('/posts', {
  controller: 'PostController',
  action: 'index'
});

Router.route('/posts/:_id',{
  controller: 'PostController',
  action: 'show'
});

if(Meteor.isClient){
  ApplicaiotnController = RouteController.extend({
    layoutTemplate: 'appLayout',
    
    onBeforeAction: function(){
      console.log('app before hook!');
      this.next();
    },
    action: function(){
      console.log('this should be overridden!');
    }
  });
  
  //inherit from other RouteControllers to model your application's behavior
  //you can separate your route logic into RouteController files instead of putting all of your complex business logic into one big route file.
  HomeController = ApplicaiotnController.extend({
    action: function(){
      //'this' is an instance of a 'RouteController'
      this.render('home');
    }
  });
  
  PostController = ApplicaiotnController.extend({
    show: function(){
      this.render('postShow');
    },
    index: function(){
      this.render('postIndex');
    }
  });
}
