(function($) {
  'use strict';

  var methods = {
    initialize: function(options) {
      var element = $(this);
      var elementWidth = element.width();
      var elementScrollWidth = element[0] ? element[0].scrollWidth : elementWidth;

      if (elementWidth != elementScrollWidth) {
        var wrapperTemplate = '<div class="scroll-wrapper" style="width: ' + elementWidth + 'px; overflow-x: scroll; overflow-y: hidden;">';
        wrapperTemplate += '<div class="scroll-top" style="width: ' + elementScrollWidth + 'px; height: 1px"></div>';
        wrapperTemplate += '</div>';

        element.before(wrapperTemplate);

        $(".scroll-wrapper").scroll(function(){
          element.scrollLeft($(".scroll-wrapper").scrollLeft());
        });

        element.scroll(function(){
          $(".scroll-wrapper").scrollLeft(element.scrollLeft());
        });
      }
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