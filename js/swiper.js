var swiper = new Swiper(".mySwiper", {
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


$(function(){
  $(".swiper-pagination").append("<div class='pause-btn'></div>")
  $(".pause-btn").append("<span class='btn-pause'></span><span class='btn-play'></span>")
  $(".swiper-pagination-bullet").append("<button type='button'></button>")
})
