Router.configure({
  //the default layout
  layoutTemplate: 'layoutOne'
});

Router.route('/', function(){
  //set the layout programmatically
  this.layout('layoutOne');
  
  //render the PageOne template
  this.render('PageOne');
  
//  this.render('PageOneFooter',{to:'article'});
});

Router.route('/two',function(){
  //set the layout based on a reactive session variable
  this.layout(Session.get('layout')||'layoutOne');
  
  //render the PageTwo template
  this.render('PageTwo');
  
  //render the PageTwoFooter template to the footer region
  this.render('PageTwoFooter',{to: 'footer'});
});

/*Router.use(function(){
  if(!this.willBeHandledOnServer())
    console.error("No route found for url"+JSON.stringify(this.url)+".");
});*/

