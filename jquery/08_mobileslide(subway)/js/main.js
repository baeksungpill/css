$(function(){
const swiper = new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical',
  direction: 'horizontal',
  loop: true,
  autoplay:{
    delay:3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type:'fraction',
  },
//   페이지 버튼을 숫자로 표시


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
})