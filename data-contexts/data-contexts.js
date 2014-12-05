Iron.utils.debug = true;

Router.route('/', function(){
  this.layout('layout',{
    //set a data context for the whoel layout
    data:{
      title: 'Master Title'
    }
  });
});

Router.route('/one', function(){
  this.layout('layout',{
    data:{
      title: 'Master Title'
    }
  });
  
  this.render('PageOne',{
    data:{
      title: 'Region Specific Title One'
    }
  });
});

Router.route('/two', function(){
  this.layout('layout',{
    data:{
      title: 'Master Title'
    }
  });
  
  this.render('PageTwo',{
    data:{
      title: 'Region Specific Title Two'
    }
  });
});
