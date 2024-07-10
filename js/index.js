
    var owl = $('.owl-carousel');
 owl.owlCarousel({
    items :4,
      loop: true,
      margin: 20,
      nav: true,
      autoplayTimeout:2500,
    autoplay:true,
    autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1,
        },
        600:{
            items:1,
        },
        900: {
          items: 3 ,
        },
       1200:{
        items:4,
       }
  
      },
    });
  