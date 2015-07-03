console.log ("## Loading routes for admin module");

AdminController = AppControllerWithAuth.extend({

});

Router.map(function() {
 this.route('/admin', {
   name:"admin",
   controller:'AdminController',
   onBeforeAction: function() {
    console.log("/admin: onBeforeAction")
    this.next();
   },
   onAfterAction: function() {
     console.log("/admin: onAfterAction")
   }
  });
});
