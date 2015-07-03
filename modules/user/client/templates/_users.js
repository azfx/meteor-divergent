Template.users.onRendered(function(){
  Meteor.setTimeout(function() {
    Materialize.showStaggeredList("#user-list")
  }.bind(this), 600)
})
