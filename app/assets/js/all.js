$(function() {
  console.log('Hello Bootstrap5');

  // $('.nav-link').click(function(){
  //   $('.nav .nav-link').removeClass('active');
  //   $(this).addClass('active');
  // });

  // swiper
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

});