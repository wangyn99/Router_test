Iron.utils.debug = true;

Router.route('/', function(){
  this.layout('layout',{
    //set a data context for the whoel layout
    data:{
      title: 'Master Title'
    }
  });
  
  this.render('PageOne');
});

Router.route('/two', function(){
  this.layout('layout',{
    data:{
      title: 'Master Title'
    }
  });
  
  this.render('PageTwo',{
    data:{
      title: 'Region Specific Title'
    }
  });
});
