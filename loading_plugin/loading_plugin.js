Router.plugin('loading',{loadingTemplate: 'loading'});

Router.route('/', function(){
  this.render('home');
}, {
  waitOn: function(){
    //the loading plugin will render the loading template 
    //until this subscription is ready
    return Meteor.subscribe('items');
  }
});

if(Meteor.isServer){
  Meteor.publish('items',function(){
    var self = this;
    //send the "ready" message in 2 seconds.
    setTimeout(function(){
      self.ready();
    }, 2000);
  });
}
