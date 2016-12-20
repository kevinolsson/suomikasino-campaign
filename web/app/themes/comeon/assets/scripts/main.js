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
  // Change necessary images
  // Change underlines to red

}

function calNoncon() {
  // Change description to nonconsecutive bonuses
  // Change necessary images
  // Change underlines to green
}

$(".switcher").click(function() {
  $(".switcher__button").toggleClass( "--right" ); // have button move from left to right
  if($('.switcher__button').hasClass("--right")) { 
    // if --right is active, then calendar is on nonconsecutive
    // code here will setup calendar for nonconsecutive
    $(".switcher__left").addClass('--not-active'); // left side becomes not active
    $(".switcher__right").removeClass('--not-active'); //right side becomes active

    // call function that changes calendar to nonconsecutive
    setTimeout(function(){calNoncon()},300);

  } else {
    // else calendar is pointing to consecutive
    // code here will setup calendar for cosecutive
    $(".switcher__left").removeClass('--not-active'); // left side becomes active
    $(".switcher__right").addClass('--not-active'); //r right side becomes not active

    // call function that changes calendar to consecutive
    setTimeout(function() { calCon() },300);
  }
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