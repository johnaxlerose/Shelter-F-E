$(document).ready(function(){
    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.close-btn i').toggleClass("active");
    });
    $('.close-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.close-btn i').toggleClass("active");
  });
});

$(".fa-plus1").on("click", function (){
  $(".faq-toggle-content1").slideToggle('active');
});
$(".fa-plus2").on("click", function (){
  $(".faq-toggle-content2").slideToggle('active');
});

$(".fa-plus3").on("click", function (){
  $(".faq-toggle-content3").slideToggle('active');
});

$(".fa-plus4").on("click", function (){
  $(".faq-toggle-content4").slideToggle('active');
});

$(".fa-plus5").on("click", function (){
  $(".faq-toggle-content5").slideToggle('active');
});

$(".fa-plus6").on("click", function (){
  $(".faq-toggle-content6").slideToggle('active');
});



/*
$(document).ready(function(){
$("#faq1").click(function(){
$("faq-toggle-content1").slideDown(300).toggleClass("active");
});
});
*/

