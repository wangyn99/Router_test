Dynamic_layout

{{> yield "testOne"}}   :     
{{#contentFor "testOne"}} TestOne text{{/contentFor}}

{{> yield "testTwo"}}:
JS File: Router("",function(){
    .....
this.render(templateName, {
  to: "testTwo"
})
})