jQuery(document).ready(function ($) {
 
  var App = App || {};

  //---MAIN----
  $(function () {
      App.Site.toggle_slide();
      App.Site.semaintic();
      App.Site.owl();
      App.Site.fancybox();
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


        return{
            toggle_slide:toggle_slide,
            semaintic:semaintic,
            owl:owl,
            fancybox:fancybox,
        };

    }(); 

  //--End All site


    
   
});    


