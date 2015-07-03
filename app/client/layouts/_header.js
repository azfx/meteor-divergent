Template._header.onRendered(function() {
  Meteor.setTimeout(function() {
    this.$(".dropdown-button").dropdown({
      constrain_width: false,
      belowOrigin:true
    });
    this.$(".button-collapse").sideNav({closeOnClick: true});
    this.$(".side-nav").css({top: $("nav").height() })
  }.bind(this), 100)
})
