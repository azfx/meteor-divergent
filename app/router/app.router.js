console.log("## Loading Router Configuration..");

AppController = RouteController.extend({
  layoutTemplate: 'appLayout',
  loadingTemplate: 'loading'
});

AppController.events({
  'click [data-action=logout]' : function() {
    console.log("logging out");
    AccountsTemplates.logout();
  }
});

// Known issue with using default controller, until then, defining layout template right at .configure
// https://github.com/iron-meteor/iron-router/pull/1223
///////

// using fabienb4:semantic-ui-components for loading and connectionLost

Router.configure({
  layoutTemplate: 'appLayout',
  loadingTemplate: "loading"
});

console.log("Calling homeRoutes");
//homeRoutes();
