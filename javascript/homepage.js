$(document).ready(function () {

// for picture slideshow //
  $("#frame").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });

  $("#frame2").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });

// back to top button //

  $("#topFunction").click(function () {
    $("html, body").animate({scrollTop: 0}, 500);
  });


  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topFunction").style.display = "block";
  } else {
    document.getElementById("topFunction").style.display = "none";
  }
};

// about me button scroll to about me section //

  $("#aboutme").click(function (){
    $('html,body').animate({
       scrollTop: $("#practice").offset().top
    });
  });




});
