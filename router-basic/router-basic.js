Router.route('/', function(){
  //render the home template with a custom data context
  this.render('home', {data: {title: 'My Title'}});
});

//when you navigate to "/one" automatically render the template named "one"
Router.route('/one');

Router.route('/two');

