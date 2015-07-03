console.log ("## Loading routes for user module");

UsersController = AppController.extend({
  subscriptions : function() {
    return Meteor.subscribe('users');
  },
  data : { users : Meteor.users.find() }
})

UserController = AppControllerWithAuth.extend({
  subscriptions : function() {
    return Meteor.subscribe('user' , this.params._id);
  },
  data : function() { return Meteor.users.findOne({_id : this.params._id}) }
})

Router.map( function() {
  this.route('/me', {
    authenticate : {
      template : 'login'
    },
    onBeforeAction: [
      'authenticate'
    ],
    layoutTemplate: 'appLayout',
    action: function() {
      this.render('user' , {
        data : Meteor.user()
      })
    }
  }),
  this.route('/users', {
    controller: 'UsersController',
  }),
  this.route('/user/:_id' , {
    name:"user",
    controller : 'UserController',
  }),
  this.route('/logout', {
     path: '/logout',
     onBeforeAction: function() {
       AccountsTemplates.logout()
     }
  })
});
