jQuery(document).ready(function ($) {
 
  var App = App || {};

  //---MAIN----
  $(function () {
      App.Site.playvideo();
      App.Site.semaintic();
      App.Site.owl();
      App.Site.fancybox();
  });

  //--All site
    App.Site = function(){
        var playvideo = function(){
            // $("#playvideo").click(function(){
            //     $("#video1")[0].src += "?autoplay=1";
            //     $(".md-displaynone").addClass("md-hide");
            // });
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
                autoplay:true,
                responsive:{
                    0:{
                        items:1.2
                    },
                    600:{
                        items:2.2
                    },
                    1000:{
                        items:4.2
                    }
                }
            })
        }
        var fancybox = function(){
            // $("#modal-sucess-form").fancybox().trigger('click');
             // $("#modal-sucess-form-2").fancybox().trigger('click');
        }


        return{
            playvideo:playvideo,
            semaintic:semaintic,
            owl:owl,
            fancybox:fancybox,
        };

    }(); 

  //--End All site


    
   
});    


