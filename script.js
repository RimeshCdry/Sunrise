const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation(){
    let elContainer =  document.querySelector("#elem-container")
let fixed = document.querySelector("#fixed-image")

elContainer.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})

elContainer.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})
let elem = document.querySelectorAll(".elem");

elem.forEach((e) =>{
    e.addEventListener("mouseenter", function(){
        let img = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${img})` 
    })
})
}

// swiper

let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });

  function swiperAnimation(){

  }

  swiperAnimation();
  page4Animation();