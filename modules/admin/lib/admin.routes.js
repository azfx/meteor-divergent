console.log ("## Loading routes for /admin");
Router.map(function() {
 this.route('/admin', {
   name:"admin",
   onBeforeAction: function() {
    console.log("/admin: onBeforeAction")
    this.next();
   },
   onAfterAction: function() {
     console.log("/admin: onBeforeAction")
   }
  });
});
