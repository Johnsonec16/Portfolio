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
  };
// progress bars animate //
var offset = $("#practice").offset().top;
  $window = $(window);


  if ($window.scrollTop() >= offset) {
    $("#progressbar, #progressbar1, #progressbar4, #progressbar5").each(function(){
     $(this).css({ width: "80%" })
    });
    $("#progressbar2, #progressbar3").each(function(){
    $(this).css({ width: "40%" })
    });
    $("#progressbar6, #progressbar7").each(function(){
    $(this).css({ width: "20%" })
    });
  } else {
    $("#progressbar, #progressbar1, #progressbar4, #progressbar5").each(function(){
     $(this).css({ width: "0%" })
    });
    $("#progressbar2, #progressbar3").each(function(){
    $(this).css({ width: "0%" })
    });
    $("#progressbar6, #progressbar7").each(function(){
    $(this).css({ width: "0%" })
    });
  };

};


// about me button scroll to about me section //

  $("#aboutme").click(function (){
    $('html,body').animate({
       scrollTop: $("#practice").offset().top
    });
  });
// Go straight to projects button //
  $("#gostart").click(function (){
    $('html,body').animate({
       scrollTop: $("#start").offset().top
    });
  });


});
document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
