  var App = App || {};

  //---MAIN----
  $(function () {
      App.Site.toggle_slide();
      App.Site.semaintic();
      App.Site.owl();
      App.Site.fancybox();
      App.Site.scrolltoTop();
      App.Site.scrollDiv();

      //
      App.Site.submitValidate();
      App.Site.getHeight();
      App.Site.getbootrap();
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
            });
            $('.page-tms .section-3-tms .owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                dots:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
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
            $("#btn-tms-sc1").click(function() {
                $('html, body').animate({
                    scrollTop: $("#tms-sc1").offset().top - 100
                }, 1000);
            });
            $("#btn-tms-sc2").click(function() {
                $('html, body').animate({
                    scrollTop: $("#tms-sc2").offset().top - 100
                }, 1000);
            });
            $("#btn-tms-sc4").click(function() {
                $('html, body').animate({
                    scrollTop: $("#tms-sc4").offset().top - 100
                }, 1000);
            });
        }

        // a Dong
        var submitValidate = function(){
            getCurrentDate();

            var formRegister = $('form#registerForm');
            if (formRegister.length < 1) {
                return;
            }
            $.validator.addMethod("validatePhone", function (value, element) {
                var flag = false;
                var phone = value;
                phone = phone.replace('(+84)', '0');
                phone = phone.replace('+84', '0');
                phone = phone.replace('0084', '0');
                phone = phone.replace(/ /g, '');
                if (phone != '') {
                    var firstNumber = phone.substring(0, 3);
                    // var validNumber = ["086","088","096","097","098","032","033","034","035","036","037","038","039","089","090","093","070","079","077","076","078","091","094","083","084","085","081","082","092","056","058"];
                    var validNumber = ["032", "033", "034", "035", "036", "037", "038", "039", "070", "079", "077", "076", "078", "083", "084", "085", "081", "082", "056", "058", "059", "086", "088", "089", "092", "099", "096", "091", "090", "056", "097", "094", "093", "058", "098", "070", "095"];
                    if ((jQuery.inArray(firstNumber,validNumber)!='-1') && phone.length == 10) {
                        if (phone.match(/^\d{10}/)) {
                            flag = true;
                        }
                    }
                }
                return flag;
            }, "Hãy nhập đúng định dạng số điện thoại");
            $.validator.addMethod("regex",
                function(value, element, regexp) {
                    var check = false;
                    return this.optional(element) || regexp.test(value);
                },
                "Vui lòng nhập đúng định dạng");
            var validForm = formRegister.validate({
                rules: {
                    name: {
                        required: true,
                    },
                    email:{
                        required: true,
                        email:true
                    },
                    phone: {
                        required: true,
                        validatePhone:true
                    },
                    company: {
                        required: true
                    }
                },
                messages: {
                    name: {
                        required: "Vui lòng nhập họ tên"
                    },
                    phone: {
                        required: "Vui lòng nhập số điện thoại",
                        validatePhone:"Sai định dạng",
                        remote:"Số điện thoại đã được đăng ký rồi"
                    },
                    email: {
                        required: "Vui lòng nhập email",
                        email: "Sai định dạng",
                    },
                    company: {
                        required: "Vui lòng nhập tên công ty"
                    }
                },
                errorElement : 'p',
                errorClass: 'error',
                errorPlacement: function(error, element) {
                    error.insertAfter(element);
                },
                highlight: function (element, errorClass) {
                    $(element).closest('.form-group').addClass('error');
                },
                unhighlight: function (element, errorClass) {
                    $(element).closest('.form-group').removeClass('error');
                },
                success: function() {
                    // 'this' refers to the form
                    var errors = validForm.numberOfInvalids();
                    if(errors==0){
                        if($('input[name=\'rule\']').is(':checked')){
                            $(':input[class="submit"]').prop('disabled', false);
                        }
                    }
                }
            });
        };

        var clickSubmit = true;
        var registerSubmit = function(){
            if ($('form#registerForm').valid()) {
                if (clickSubmit) {
                    var data = $('form#registerForm').serializeArray();
                    clickSubmit = false;

                    $.ajax({
                        type : 'GET',
                        url : 'https://script.google.com/macros/s/AKfycbzvbGD0KjH1WoA_QNQ6tDw2jSUHFoBNO5JUTKxXJumxGjhGskpk3LASi5Z7McA35-c/exec',
                        dataType:'json',
                        crossDomain : true,
                        data : data,
                        success : function(data)
                        {
                            clickSubmit = true;

                            if(data == 'false')
                            {
                                alert('ERROR, Please try again later!');
                            }else{
                                $('form#registerForm').find('input[type="text"], input[type="tel"], input[type="email"]').val(''); //--reset form

                                $("#modal-sucess-form").fancybox().trigger('click');
                            }
                        }
                    });
                }
            }
        }

        var getCurrentDate = function() {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
    
            today = mm + '/' + dd + '/' + yyyy;
            
            $('#current-date').val(today);
        }

        var getHeight = function(){
            $('.banner-tms .md-content .col-md-4 p').height(h3height); 
              var h3height = 0;
                  $('.banner-tms .md-content .col-md-4 p').each(function() {
                      if(h3height < $(this).height()){
                        h3height = $(this).height();
                      };
                  });
              $('.banner-tms .md-content .col-md-4 p').height(h3height); 
              var onresize = function() {
                 $('.banner-tms .md-content .col-md-4 p').css("height","auto");
                         var h3height = 0;
                         $('.banner-tms .md-content .col-md-4 p').each(function() {
                             if(h3height < $(this).height()){
                               h3height = $(this).height();
                             };
                         });
                         $('.banner-tms .md-content .col-md-4 p').height(h3height);
                 };
              window.addEventListener("resize", onresize);
        }
        var getbootrap = function(){

            $(".md-nav-tab-1 .item span").click(function(){
               var cc_Sd = $(this).attr("data-href");
               $(".md-nav-tab-1 .item span").removeClass("active");
               $(this).addClass("active");
               $(".md-content-tab-1").removeClass("active");
               $(cc_Sd).addClass("active");
            });
            $(".smd-nav-control-1 span").click(function(){
                var sc89_jh= $(this).attr("data-href");
                $(".md-navbar-1 .tab-pane").removeClass('active');
                $(sc89_jh).addClass("active");
            });


        }

        return{
            toggle_slide: toggle_slide,
            semaintic: semaintic,
            owl: owl,
            fancybox: fancybox,
            scrolltoTop: scrolltoTop,
            scrollDiv: scrollDiv,
            submitValidate:submitValidate,
            registerSubmit: registerSubmit,
            getHeight: getHeight,
            getbootrap: getbootrap,
        };

    }(); 

  //--End All site





