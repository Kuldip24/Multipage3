$(document).ready(function(){
  
  // Mobile menu start---------------------
  $('.mobile_menu').hide();
  
  $('.mobile_btn').click(function(){
    $('.mobile_menu').animate({
      height: "toggle"
    });
    $(this).find('i').toggleClass('fa-bars fa-times',);
  });
  
  // Mobile menu end------------------

  // menubar add active class---------------------
  $('.menubar').click(function(){
    $('.menubar a.active').removeClass('.active');
    $(this).addClass('.active');
  })

  $('.mobile_menu').click(function(){
    $('.mobile_menu a.active').removeClass('.active');
    $(this).addClass('.active');
  })
  
  // testimonial start------------------
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop:true,
    nav:true,
    dots: true,
  })
  // testimonial end------------------
  
  
  
});