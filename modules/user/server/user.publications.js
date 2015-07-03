
Meteor.startup(function(){

  Meteor.publish('users' , function(){
    return Meteor.users.find({} , { fields: { profile : 1 } })
  });

  Meteor.publish('user' , function(_id) {
    return Meteor.users.find({ _id : _id } , { fields: { profile : 1 } })
  })

})
