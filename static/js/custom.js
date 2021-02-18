$(function () {
	  $(window).scroll(function () {
    if ($(window).scrollTop() >= 700) {
      $('header').addClass('fixed-header');
          

    }
     else {
     
      $('header').removeClass('fixed-header');
     
    }

    // if (window.matchMedia('(max-width: 1000px)').matches)
    // {

    //   $('.nav-link ').css('color','white');
    // }   

  });

//   $(window).resize(function() {
//     if ($(this).width() > 1200) {
//       $('header').addClass('fixed-header');
      
//     }
//     else
//     {
//       $('.nav-link ').css('color','white');
      
//       // $('header').remove('fixed-header');
//     }
//  });
});



