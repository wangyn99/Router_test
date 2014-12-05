Iron.utils.debug = true;

Router.route('/', function(){
  this.layout('layout',{
    //set a data context for the whoel layout
    data:{
      title: 'Master Title'
    }
  });
  this.render('PageOne',{data:{title1:'title one'}});
  this.render('PageTwo',{
    to: 'footer',
    data:{title2:'title two'}});
});


