if (Meteor.is_client) {
  // route('/', function(ctx){ 
    $('#sign-in-form').live('submit', function(e) {
      e.preventDefault();
      var username = $(this).find('#username').val();
      var password = $(this).find('#password').val();

      User.login(username, password);
    });

    $('#sign-up-form').live('submit', function(e) {
      e.preventDefault();
      
      var username = $(this).find('#email').val();
      var password = $(this).find('#new-password').val();

      User.create(username, password);
      User.login(username, password);
    });

    User.on('login', function() {
      var url = utils.parseUrl('/app!profile');
      process.sendEmit('purl:url', url);
    });
    // XXX Need to update has when scroll down
    // need to maintain page scroll and active
    // nav
    Template.header.created = function() {
      this.scrollHandler = function(e) {
      if(window.pageYOffset > 0)
        $('header').addClass('shrink');
      else
        $('header').removeClass('shrink');
      }
      
      $(document).bind('scroll', this.scrollHandler);
    }

    Template.header.destroyed = function() {
      $(document).unbind(this.scrollHandler);
    }
    

    Template.header.events = {
      'click #main-nav li': function(e) {
        $('#main-nav li').removeClass('active');
        var el = $(e.currentTarget);

        scrollToId(el.attr('class'));

        el.addClass('active');
      }
    }

    Template.footer.events = {
      'click .sign-up-circle': function() {
         $('body, html').animate({scrollTop: 0}, 200, 'swing');
      },
      'click #navigate li': function(e) {
        scrollToId($(e.currentTarget).attr('class'));
      }
    }

    Template.info.events = {
      '#sign-in-form submit': function(e) {
        alert('text');
      }
    }
  // });

  function scrollToId(id) {
    var offset = $('#'+id).offset().top;
    if(offset > 50) 
      offset -= 40;

    $('body, html').animate({scrollTop: offset}, 200, 'swing');
  }

  //  XXX On page load offset is always 0;
  Template.header.shrink = function(){
      return window.pageYOffset >= 300 ? 'shrink' : '';
  }

  // route.start();
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}