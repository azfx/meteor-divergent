Template.home.onRendered(function(){
  Meteor.setTimeout(function(){
    //$('.parallax').css({position : 'static'});
    $('.parallax').parallax();
    Materialize.fadeInImage('div.parallax img');
  }.bind(this) , 200)
})
