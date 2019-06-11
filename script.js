$(function() {
  
    function() {
      'use strict';

      var openMenu = document.getElementById('open_menu');
      var closeMenu = document.getElementById('close_menu');
      var menu = document.getElementById('menu');

      $(openMenu).addEventListener.click(function() {
        menu.classList.add('.shown');
      });

      $(closeMenu).addEventListener.click(function() {
        menu.classList.remove('.shown');
      });
    });

  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    } else if (slideIndex == $('.slide').length - 1) {
      $('.next-btn').hide();
    }
  }

  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    
    var clickedIndex = $('.index-btn').index($(this));
    
    $('.slide').eq(clickedIndex).addClass('active');
    toggleChangeBtn();

  });

  $('.change-btn').click(function() {
    
    var $displaySlide = $('.active');
    
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });

});
