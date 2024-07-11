
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










window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");
let navbar2 = document.getElementById("navbar2");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
     navbar2.classList.add("navbar-shrink2");
  } else {
  navbar.classList.remove("navbar-shrink");
   navbar2.classList.remove("navbar-shrink2");
 }
}
window.addEventListener("scroll", function () {
  shrink();
});




 let modeBtn2 = document.getElementById("mode-btn2");
  modeBtn2.addEventListener("click", function () {
      if (document.body.className !="darke2"){
              this.firstElementChild.src = "../imgs/dark-theme.svg";
      }
      else{
          this.firstElementChild.src = "../imgs/dark-theme.svg";
  } 
  document.body.classList.toggle("darke2");
  }
  );  

  
  
  AOS.init();







