/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */


(function($) {

function calCon() {
  // Change description to consecutive bonuses
    //25
    $( "#block-1" ).find( "p").text("999€ Bonus Money to start of the 12 days of Christmas!");

    //26
    $( "#block-2" ).find( "p").text("x3 win multiplier for Casino Holdem until the 6th of January!");
    //27
    $( "#block-3" ).find( "p").text("100% deposit bonus until the 6th of January");
    //28
    $( "#block-4" ).find( "p").text("x3 Free spins on Live Ruletti!");
    //29
    $( "#block-5" ).find( "p").text("99 Free attempts on online slot machines!");
    //30
    $( "#block-6" ).find( "p").text("x3 win multiplier on Black Jack Pro until the 6th of January!");
    //31
    $( "#block-7" ).find( "p").text("Additional €999 Bonus Money to keep the party going!");
    //1
    $( "#block-8" ).find( "p").text("Visit this site on New years to find out our Mystery Bonus!");
    //2
    $( "#block-9" ).find( "p").text("200% deposit bonus until the 6th of January");
    //3
    $( "#block-10" ).find( "p").text("99 Free scratches in Scratch ahoy!");
    //4
    $( "#block-11" ).find( "p").text("4 Free attempts in Mega Fortune!");
    //5
    $( "#block-12" ).find( "p").text("x5 win multiplier in any game for the next 24hours!");

  // Change necessary images
  for(i=1; i<=12; i++) {
    //alert($("#block-"+i ).find( "p").text());
    $("#block-"+i).removeClass("--non-consecutive").addClass("--consecutive");
  }

  // Change underlines to red
  $( ".--green" ).addClass("--red").removeClass("--green");

}

function calNoncon() {
  // Change description to nonconsecutive bonuses
    //25
    $( "#block-1" ).find( "p").text("999€ Bonus Money to start of the 12 days of Christmas!");
    //26
    $( "#block-2" ).find( "p").text("x3 win multiplier for Casino Holdem valid for the next 24 hours!");
    //27
    $( "#block-3" ).find( "p").text("100% deposit bonus active for the next 24 hours!");
    //28
    $( "#block-4" ).find( "p").text("x1 Free spin on Live Ruletti!");
    //29
    $( "#block-5" ).find( "p").text("10 Free attempts on online slot machines!");
    //30
    $( "#block-6" ).find( "p").text("x3 win multiplier for Black Jack Pro for the next 24 hours!");
    //31
    $( "#block-7" ).find( "p").text("Additional €200 Bonus Money to keep the party going!");
    //1
    $( "#block-8" ).find( "p").text("Visit this site on New years to find out our Mystery Bonus!");
    //2
    $( "#block-9" ).find( "p").text("100% deposit bonus for the next 24hours!");
    //3
    $( "#block-10" ).find( "p").text("10 Free scratches in Scratch ahoy!");
    //4
    $( "#block-11" ).find( "p").text("1 Free attempt in Mega Fortune!");
    //5
    $( "#block-12" ).find( "p").text("x5 win multiplier on your next 5 wins!");

  // Change necessary images
  for(i=1; i<=12; i++) {
    //alert($("#block-"+i ).find( "p").text());
    $("#block-"+i).removeClass("--consecutive").addClass("--non-consecutive");
  }

  // Change underlines to green
  $( ".--red" ).addClass("--green").removeClass("--red");
}

$(".switcher").click(function() {
  $(".switcher__button").toggleClass( "--right" ); // have button move from left to right
  if($('.switcher__button').hasClass("--right")) { 
    // if --right is active, then calendar is on nonconsecutive
    // code here will setup calendar for nonconsecutive
    $(".switcher__left").addClass('--not-active'); // left side becomes not active
    $(".switcher__right").removeClass('--not-active'); //right side becomes active

    // call function that changes calendar to nonconsecutive
    setTimeout(function(){calNoncon();},100);

  } else {
    // else calendar is pointing to consecutive
    // code here will setup calendar for cosecutive
    $(".switcher__left").removeClass('--not-active'); // left side becomes active
    $(".switcher__right").addClass('--not-active'); //r right side becomes not active

    // call function that changes calendar to consecutive
    setTimeout(function(){calCon();},100);
  }
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});



  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.