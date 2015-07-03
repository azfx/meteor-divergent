
Meteor.startup(function() {
  // Create in 25 fake users.
  // Using Private Package yamb:randomusers
    if(Meteor.users.find().count() < 25){
      RandomUsers.get(25 , function(randomUsers){
        _.each(randomUsers , function(random){
          var randomUser = random.user;
          var user = {};
          user.email = randomUser.email;
          user.username = randomUser.username;
          user.password = randomUser.username + "-y@mb";
          user.profile = {};
          user.profile.gender = randomUser.gender;
          user.profile.name = randomUser.name;
          user.profile.location = randomUser.location;
          user.profile.photo = randomUser.picture;
          Accounts.createUser(user);
        })
        console.log("## Dummy users created");
      });
    }
})
