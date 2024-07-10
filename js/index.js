
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
  // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()