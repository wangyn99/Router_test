Router.configure({layoutTemplate: 'appLayout'});

Router.route('/',{name:'home'});

Router.route('/posts/:_id', function(){
  //set the reactive state variable "postId" with a value of the id from our url
  this.state.set('postId', this.params._id);
  this.render('post');
});

if(Meteor.isClient){
  Template.post.helpers({
    postId: function(){
      //access the current RouterController by "Iron.controller" in template helper
      var controller = Iron.controller();
      
      //get reactive state variable
      return controller.state.get('postId');
    }
  })
}