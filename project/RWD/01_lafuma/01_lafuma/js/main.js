$(function () {
  $(".gnb>li").mouseenter(function () {
    $(this).find(".depth2").stop().fadeIn(300);
  });

  $(".gnb>li").mouseleave(function () {
    $(this).find(".depth2").stop().fadeOut(300);
  });

  // 스와이퍼 슬라이드
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay:true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});


// css가 아닌 js에서 content 사진 hover걸때
$(function(){
$(".content ul.list li").mouseenter(function(){
  let num = $(this).find("img").attr('src');
  console.log(num);
  // replace함수(바꾸는 함수) _ot로 되어있는 파일을 _ov로 바꿔라
  let num2 = num.replace('_ot','_ov');
  console.log(num2);

  $(this).find('img').attr('src',num2);
})

$(".content ul.list li").mouseleave(function(){
  let num = $(this).find("img").attr('src');
  console.log(num);
  // replace함수(바꾸는 함수) _ot로 되어있는 파일을 _ov로 바꿔라
  let num2 = num.replace('_ov','_ot');
  console.log(num2);

  $(this).find('img').attr('src',num2);
})
})

$(function(){
  $('.btn_family').click(function(){
    $(".family_box .list").slideToggle();
    $(this).toggleClass("on");
  })

})
