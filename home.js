if (Meteor.is_client) {
  route('/', function(ctx){ 

    

  });

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