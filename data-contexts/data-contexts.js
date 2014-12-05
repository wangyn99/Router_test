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
    data: 'Master Title'
  });
  
    this.render('PageTwo',{
    data:{
      title1: 'Region Specific Title One'
    }
  });

  
  this.render('PageOne',{
    data:{
      title1: 'Region Specific Title One'
    }
  });
});

Router.route('/two', function(){
  this.layout('layout',{
    data: 'Master Title'
  });
  
  this.render('PageTwo',{
    data:{
      to: 'footer',
      title2: 'Region Specific Title Two'
    }
  });
});
