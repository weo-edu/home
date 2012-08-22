if (Meteor.is_client) {
  route('/', function(ctx){ 

    // XXX Need to tear down scroll
    // Need to update has when scroll down
    // need to maintain page scroll and active
    // nav
    $(document).bind('scroll', function(e) {
      if(window.pageYOffset > 0)
        $('header').addClass('shrink');
      else
        $('header').removeClass('shrink');
    });

    Template.events = {
      'scroll': function(e) {
        console.log(e);
      },
      'click #main-nav li': function(e) {
        $('#main-nav li').removeClass('active');

        var el = $(e.currentTarget);
        var id = el.attr('class');

        el.addClass('active');
        
        var offset = $('#'+id).offset().top;
        if(offset > 50) 
          offset -= 40;

        $.scrollTo(offset, 200, {easing: 'swing'});
      },
      'click .sign-up-circle': function() {
         $('#main-nav li.main-content').click();
      }
    }
  });

  Template.header.shrink = function(){
      return window.pageYOffset >= 300 ? 'shrink' : '';
  }

  route.start();
  

}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}