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
    //   페이지 버튼을 숫자로 표시
    type:'fraction',
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

$('.banner_slide').slick({
    autoplay : true,
    // 한 화면에 보여줄 슬라이드 개수
    slidesToShow:2,
    // 좌우버튼 숨기기
    arrows:false,
    // 페이지버튼 보이기
    dots:true,
  });

// 아코디언 (2단메뉴) 메뉴
$(".m_gnb>ul>li>a").click(function(){
    $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp();
  })

// 햄버거 버튼을 클릭하면 모바일 m_side_wrap 이 
// left:-100%에서 left:0 으로 오게끔
$(".m_btn").click(function(){
    $(".cover").fadeIn();
    $(".m_side_wrap").animate({"left":0},300);
  })
// x버튼, m_close버튼을 클릭하면 m_side_wrap 다시 밖으로
$(".m_close").click(function(){
    $(".cover").fadeOut();
    $(".m_side_wrap").animate({"left":"-100%"},300);
  })
})