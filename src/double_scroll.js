(function($) {
  'use strict';

  var scrollWrapper = function() {
    var element = $(this);
    var elementWidth = element.width();
    var elementScrollWidth = element[0] ? element[0].scrollWidth : elementWidth;

    if (elementScrollWidth > elementWidth) {
      var scrollWrapperTemplate = '<div id="double-scroll" class="scroll-wrapper" style="width: ' + elementWidth + 'px; overflow-x: scroll; overflow-y: hidden;">';
      scrollWrapperTemplate += '<div class="scroll-top" style="width: ' + elementScrollWidth + 'px; height: 1px"></div>';
      scrollWrapperTemplate += '</div>';

      if ($('#double-scroll').length) {
        $('#double-scroll').replaceWith(scrollWrapperTemplate);
      } else {
        element.before(scrollWrapperTemplate);
      }

      $(".scroll-wrapper").scroll(function() {
        element.scrollLeft($(".scroll-wrapper").scrollLeft());
      });

      element.scroll(function() {
        $(".scroll-wrapper").scrollLeft(element.scrollLeft());
      });
    } else {
      if ($('#double-scroll').length) {
        $('#double-scroll').hide();
      }
    }
  }

  var methods = {
    initialize: function() {
      scrollWrapper.call(this);
      $(window).on('resize', scrollWrapper.bind(this));
    },

    destroy: function() {
      this.off();
    }
  };

  jQuery.fn.doubleScroll = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, [].slice.call(arguments, 1));
    } else {
      return methods.initialize.apply(this, arguments);
    }
  };
})(window.jQuery);