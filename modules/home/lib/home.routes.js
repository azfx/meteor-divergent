console.log ("## Loading routes for home");

HomeController = AppController.extend({

});

Router.map(function() {
 this.route('/', {
   name:"home",
   controller: 'HomeController',
   onBeforeAction: function() {
    console.log("/: onBeforeAction")
    this.next();
   },
   onAfterAction: function() {
     console.log("/: onAfterAction")
   }
  });
});
