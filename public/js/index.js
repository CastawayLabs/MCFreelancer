/*
 *
 */

/*global jQuery*/
jQuery(document).ready(function ($) {

  'use strict';

  // Since our main-section background is greyish white, we oughta
  // make our navbar transparent.
  // A class has been created in index.less which makes the navbar
  // transparent and makes other color adjustments to the elements
  // contained.
  $('#navbar-main').addClass('txp');

  // TODO: remove the txp class upon scroll-past main-section
  //       will need an elaborate scrollspy for that

  // This is stupid. We shouldn't have to do this!
  $('[data-toggle="popover"]').popover();

});
