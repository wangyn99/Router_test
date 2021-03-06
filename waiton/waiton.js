Router.route('/', function(){
  this.render('Page');
});

Router.route('/subscriptions', {
  waitOn: function(){
    return Meteor.subscribe('post');
  },
  action: function(){
    if(this.ready())
      //if the sub handle returned from waitOn ready() method returns true
      //then we're ready to go ahead and render the Page
      this.render('Page');
    else
      //otherwise render the 'Loading' template
      this.render('Loading');
  }
});

myReadyVar = new Blaze.ReactiveVar(false);
Router.route('/custom', {
  waitOn: function(){
    return function(){
      //returns true or false
      //and can bet set with myReadyVar.set(true|false);
      return myReadyVar.get();
    };
  },
  action: function(){
    if(this.ready())
      this.render('Page');
    else
      this.render('LoadingCustom');
  }
  });

one = new Blaze.ReactiveVar(false);
two = new Blaze.ReactiveVar(false);
Router.route('/many',{
  waitOn: function(){
    return[
      function() {return one.get(); },
      function() {return two.get(); }
    ];
  },
  action: function(){
    if(this.ready())
      this.render('Page');
    else
      this.render('LoadingMany');
  }
});

if(Meteor.isServer){
  Meteor.publish('post', function(){
    var self= this;
    setTimeout(function(){
      self.ready();
    }, 2000);
  });
}
