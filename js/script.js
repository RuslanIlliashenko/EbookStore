var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    //centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
          },
      },
});

function scrollToTop() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
}