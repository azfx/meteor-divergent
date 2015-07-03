
Meteor.startup(function(){

  Meteor.publish('users' , function(){
    console.log("## Publishing users collection");
    return Meteor.users.find({} , { fields: { profile : 1 } })
  });

  Meteor.publish('user' , function(_id) {
    console.log("## Publish user document for: ", _id);
    return Meteor.users.find({ _id : _id } , { fields: { profile : 1 } })
  })

})
