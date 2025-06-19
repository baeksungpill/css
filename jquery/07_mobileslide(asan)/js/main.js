$(function(){

// swiper 슬라이드 자바스크립트 코드삽입
const swiper = new Swiper('.swiper', {
  // Optional parameters
//  슬라이드 방향 바꾸는 명령어
    // direction: 'vertical', (세로)
    // direction: 'horizontal'(가로),
    // 슬라이드 fadein 효과 
    effect:'fade',
    loop: true,
    // 자동실행
    autoplay:{
        delay:3000,
    },

  // If we need pagination
//   페이지 버튼
    pagination: {
    el: '.swiper-pagination',
    // 페이지버튼을 클릭했을때 해당 슬라이드 위치로 갈때
    clickable:true,
    },

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