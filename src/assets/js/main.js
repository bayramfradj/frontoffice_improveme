$(function(){"use strict";


$(window).on('scroll',function(event){var scroll=$(window).scrollTop();
if(scroll<10){$(".navbar-area").removeClass("sticky");}
else{$(".navbar-area").addClass("sticky");}});
$(".navbar-nav a").on('click',function(){$(".navbar-collapse").removeClass("show");});
$(".navbar-toggler").on('click',function(){$(this).toggleClass("active");});
$(".navbar-nav a").on('click',function(){$(".navbar-toggler").removeClass('active');});
var scrollLink=$('.page-scroll');
$(window).scroll(function(){var scrollbarLocation=$(this).scrollTop();
scrollLink.each(function(){var sectionOffset=$(this.hash).offset().top-73;if(sectionOffset<=scrollbarLocation){$(this).parent().addClass('active');
$(this).parent().siblings().removeClass('active');}});});
$('[href="#side-menu-right"], .overlay-right').on('click',function(event){$('.sidebar-right, .overlay-right').addClass('open');});
$('[href="#close"], .overlay-right').on('click',function(event){$('.sidebar-right, .overlay-right').removeClass('open');});
$('.container').imagesLoaded(function(){var $grid=$('.grid').isotope({transitionDuration:'1s'});
$('.portfolio-menu ul').on('click','li',function(){var filterValue=$(this).attr('data-filter');
$grid.isotope({filter:filterValue});});
$('.portfolio-menu ul li').on('click',function(event){$(this).siblings('.active').removeClass('active');
$(this).addClass('active');event.preventDefault();});});
$('.image-popup').magnificPopup({type:'image',gallery:{enabled:true}});
$('.video-popup').magnificPopup({type:'iframe'});
$('.testimonial-active').slick({infinite:true,slidesToShow:3,slidesToScroll:1,speed:800,arrows:false,dots:true,autoplay:true,autoplaySpeed:5000,responsive:[{breakpoint:1200,settings:{slidesToShow:3,}},{breakpoint:992,settings:{slidesToShow:2,}},{breakpoint:768,settings:{slidesToShow:1,}},{breakpoint:576,settings:{slidesToShow:1,arrows:false,}}]});
$('.testimonial-active-2').slick({infinite:true,slidesToShow:2,slidesToScroll:1,speed:800,arrows:false,dots:true,autoplay:true,autoplaySpeed:5000,responsive:[{breakpoint:1200,settings:{slidesToShow:2,}},{breakpoint:992,settings:{slidesToShow:1,}},{breakpoint:768,settings:{slidesToShow:1,}},{breakpoint:576,settings:{slidesToShow:1,arrows:false,}}]});
$('.client-active').slick({infinite:true,slidesToShow:6,slidesToScroll:1,speed:800,arrows:false,dots:false,autoplay:true,responsive:[{breakpoint:1200,settings:{slidesToShow:6,}},{breakpoint:992,settings:{slidesToShow:5,}},{breakpoint:768,settings:{slidesToShow:3,}},{breakpoint:576,settings:{slidesToShow:2,arrows:false,}}]});
$('.testimonial-active-4').slick({infinite:true,slidesToShow:2,slidesToScroll:1,speed:800,arrows:false,dots:true,autoplay:true,autoplaySpeed:5000,responsive:[{breakpoint:1200,settings:{slidesToShow:2,}},{breakpoint:992,settings:{slidesToShow:2,}},{breakpoint:768,settings:{slidesToShow:1,}},{breakpoint:576,settings:{slidesToShow:1,arrows:false,}}]});
$(window).on('scroll',function(event){if($(this).scrollTop()>600){$('.back-to-top').fadeIn(200)}else{$('.back-to-top').fadeOut(200)}});$('.back-to-top').on('click',function(event){event.preventDefault();
$('html, body').animate({scrollTop:0,},1500);});new WOW().init();});
