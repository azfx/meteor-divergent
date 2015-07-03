console.log("## Loading Router Configuration..");

AppController = RouteController.extend({
  layoutTemplate: 'appLayout',
  loadingTemplate: 'loading',
  onAfterAction:function(){
    $("main, footer.page-footer").velocity("transition.slideUpIn", {duration:1250});
  }
});

// Site wide event handling
AppController.events({
  'click [data-action=logout]' : function() {
    console.log("logging out");
    AccountsTemplates.logout();
  }
});

AppControllerWithAuth = AppController.extend({
  authenticate : {
    template : 'login'
  },
  onBeforeAction: [
    'authenticate'
  ]
})
