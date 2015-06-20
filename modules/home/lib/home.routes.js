console.log ("## Loading routes for /");

  Router.map(function() {
   this.route('/', {
     name:"home",
     onBeforeAction: function() {
      console.log("/: onBeforeAction")
      this.next();
     },
     onAfterAction: function() {
       console.log("/: onBeforeAction")
     }
    });
  });
