if (Meteor.is_client) {
  route('/', function(ctx){ 

    // XXX Need to tear down scroll 
    $(document).bind('scroll', function(e) {
      if(window.pageYOffset >= 5)
        $('header').addClass('shrink');
      else
        $('header').removeClass('shrink');
    });

    Template.events = {
      'scroll': function(e) {
        console.log(e);
      }
    }

    //  XXX Reanimates on hot code push :(

  });

  Template.header.shrink = function(){
      return window.pageYOffset >= 300 ? 'shrink' : '';
  }

  // Template.hello.greeting = function () {
  //   return "Welcome to home.";
  // };

  // Template.hello.events = {
  //   'click input' : function () {
  //     // template data, if any, is available in 'this'
  //     if (typeof console !== 'undefined')
  //       console.log("You pressed the button");
  //   }
  // };
  route.start();
  

}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}