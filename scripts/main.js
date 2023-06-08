jQuery(document).ready(function ($) {
 
  var App = App || {};

  //---MAIN----
  $(function () {
      App.Site.toggle_slide();
      App.Site.semaintic();
      App.Site.owl();
      App.Site.fancybox();
      App.Site.scrolltoTop();
      App.Site.scrollDiv();
  });

  //--All site
    App.Site = function(){
        var toggle_slide = function(){
            $('.page-header .toggle-slide').click(function(){
              $('.page-header .main-menu').addClass('active');
            });
            $('.page-header .close-slide').click(function(){
              $('.page-header .main-menu').removeClass('active');
            });
        }
        var semaintic = function(){
            
            $('.ui.dropdown')
              .dropdown()
            ;
        }
        var owl = function(){
            
            $('.md-content .owl-carousel').owlCarousel({
                loop:true,
                margin:20,
                nav:true,
                stagePadding: 100,
                autoplay:true,
                autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });
            $('.section-2 .owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                dots:false,
                autoplay:true,
                autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1.2
                    },
                    600:{
                        items:1.
                    },
                    1000:{
                        items:1.2
                    }
                }
            })
        }
        var fancybox = function(){
            // $("#modal-sucess-form").fancybox().trigger('click');
        }
        var scrolltoTop = function(){
            $(window).scroll(function(){
                if ($(window).scrollTop() >= 60) {
                    $('.page-header').addClass('scroll-top');
                    $('.page-header .toggle-slide').addClass('scroll-top-mb');
                }
                else {
                    $('.page-header').removeClass('scroll-top');
                    $('.page-header .toggle-slide').addClass('scroll-top-mb');
                }                 
            });

        }

        var scrollDiv = function(){
            $("#btn-home").click(function() {
                $('html, body').animate({
                    scrollTop: $("#btn-home")
                }, 1000);
            });
            $("#btn-sc1").click(function() {
                $('html, body').animate({
                    scrollTop: $("#section-1").offset().top - 100
                }, 1000);
            });
            $("#btn-sc2").click(function() {
                $('html, body').animate({
                    scrollTop: $("#section-2").offset().top - 100
                }, 1000);
            });
            $("#btn-sc3").click(function() {
                $('html, body').animate({
                    scrollTop: $("#section-4").offset().top - 100
                }, 1000);
            });
            $("#btn-sc4").click(function() {
                $('html, body').animate({
                    scrollTop: $("#section-6").offset().top - 100
                }, 1000);
            });
        }

        return{
            toggle_slide:toggle_slide,
            semaintic:semaintic,
            owl:owl,
            fancybox:fancybox,
            scrolltoTop:scrolltoTop,
            scrollDiv:scrollDiv,
        };

    }(); 

  //--End All site


    
   
});    




