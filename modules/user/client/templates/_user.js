Template._user.events({
  "click [data-action=viewuser]" : function( e , t ) {
    e.preventDefault();
    Router.go("user" , { _id : t.data._id})
  }
})
