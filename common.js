$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 900) {
            $('.tops1').fadeIn();
        } else {
            $('.tops1').fadeOut();
        }
    });

    $('.tops1').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop()>=$(document).height()-"999") {
            $('.tops2').fadeIn();
        } else {
            $('.tops2').fadeOut();
        }
    });

    $('.tops2').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

   $( "#ip" ).hover(
   function() {
     var min = 250, max = 255;
     var rgbColor1 = 'rgb('+(Math.floor(Math.random() * (max - min)) + min)+','+(Math.floor(Math.random() * (max - min)) + min)+','+(Math.floor(Math.random() * (max - min)) + min)+')';
     $(this).css('color',rgbColor1);
   }, function() {
     var min = 0, max = 5;
     var rgbColor2 = 'rgb('+(Math.floor(Math.random() * (max - min)) + min)+','+(Math.floor(Math.random() * (max - min)) + min)+','+(Math.floor(Math.random() * (max - min)) + min)+')';
     $(this).css('color',rgbColor2);
   });

 $('#ip').hover(
  function() {
 var min = 0, max = 250;
 var rgbColor3 = 'rgb('+(Math.floor(Math.random() * (max - min)) + min)+','+(Math.floor(Math.random() * (max - min)) + min)+','+(Math.floor(Math.random() * (max - min)) + min)+')';
 $(this).css("background-color",rgbColor3);
 }, function() {
   var rgbColor4  = function get_random_color() {
     var letters = '0123456789ABCDEF'.split('');
     var color = '#';
     for (var i = 0; i < 6; i++ ) {
       color += letters[Math.round(Math.random() * (15-0)+0)];
     }
     return color;
   }﻿
   $(this).css("background-color",rgbColor4);
  });

  $( "#ip" ).hover(
  function() {
    $(this).css('transition','2s');
  });

    $('#down').click(function(){
      var speed = 1000;
      var top = $('#w').offset().top;
      $('html, body').animate({scrollTop: top-50}, speed);
      return false;
   });

  $('#n2').click(function(){
    var speed = 1000;
    var top = $('#form').offset().top;
    $('html, body').animate({scrollTop: top-80}, speed);
    return false;
  });

  $('#myNavbar ul li a').click(function(){
    // скорость скролла
    var speed = 3000;
    // место скролла
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
    $('html, body').animate({scrollTop: top-50}, speed);
    return false;
  });
    //Фиксированое меню
    // Options
    var options = {
        offset: 200,
        offsetSide: 'top',
        throttle: 15,
        classes: {
            clone: 'headhesive',
            stick: 'headhesive--stick',
            unstick: 'headhesive--unstick'
        }
    }

    // Create a new instance of Headhesive.js and pass in some options
    var header = new Headhesive('.navbar-fixed-top2', options);

    $(".headhesive a").mPageScroll2id({
        offset: 50,
        scrollSpeed: 3900,
        scrollEasing: "easeInOutExpo",
        scrollingEasing: "easeInOutCirc", // Устанавливает easing, который будет проигрываться если вызвать её уже во время изинга(кликнуть по ссылке во время прокрутки)
        clickedClass: "active-list", // Устанавливает класс для ссылки, при клике на неё
        targetClass: "color-block", // Устанавливает класс для блока, при его появлении во время скролла
        highlightClass: "active-item", // Устанавливает класс для ссылки, при скролле до привязанного к нему блоку
        keepHighlightUntilNext: true, // Один эллемент всегда будет выделен
        forceSingleHighlight: true,
        liveSelector: "a.my-future-class",

    });
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        focus: '#name'
    });


    $(".search_header").click(function() {
        $(".search_popup").show();
        $(".close_search").show();
    });

    $(".close_search").click(function() {
        $(".search_popup").hide();
        $(".close_search").hide();
    });

    var click_check = true;
    $('.hamburger').click(function() {
        if(click_check) {
            $('.hamburger').addClass('is-active');
        }
        else {
            $('.hamburger').removeClass('is-active');
        }
        click_check = !click_check;
    });

});
