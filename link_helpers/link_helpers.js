Router.route('/', function(){
  this.render('home');
},{
  // here provide a custom name explicitly
  //if you don't give it a name,the router will guess its name based on the path.
  name: 'home'
});

//name defaults to 'one' based on the path
Router.route('/one');


//name defaults to 'two' based on the path
Router.route('/two');

