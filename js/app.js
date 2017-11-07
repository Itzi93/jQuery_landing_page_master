$(document).ready(function(){
//Creating variable to know what it's the distance
// - Step 1: Add the class "affix" to the nav element when the scroll distance reaches past 50 pixels.
  $(window).scroll(function (){

   if ($(window).scrollTop() > 50) {
     $('#mainNav').addClass('affix');
   } else {
     $('#mainNav').removeClass('affix');
   }
  });

//When the navbar links are clicked, animate a page scroll down to that anchor.
  $('nav a').on('click', function(event){
      // prevent the standard link operation on click
      event.preventDefault();
      console.log(event);
      // using the href of the link to identify what
      // section to scroll to
      var findID = $(this).attr('href');
      console.log(findID);
      // using jQuery.animate() to animate the entire HTML document
      $('html').animate({
        // get that section's top offset
        scrollTop: $(findID).offset().top
      }, {
          // scrollTop to the targetOffset (600 ms)
          duration: 600,
      });
    });

  //Use Bootstrap scrollspy to change the navbar links on scroll.
  //Done in HTML with attributes

  //Step 4: Implement Font Awesome icons where applicable.
  //Done in HTML

  //Step 5: Animate.css and WOW.js
  $('.header-content .btn').mouseenter(function(){
    $(this).addClass('animated flash');
  });
  $('.bg-primary .btn').mouseenter(function(){
    $(this).addClass('animated pulse');
  });
  $('.bg-dark .btn').mouseenter(function(){
    $(this).addClass('animated jello');
  });


});
