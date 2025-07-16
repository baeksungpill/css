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

// 패밀리사이트 버튼 클릭
$(function(){
  $('.btn_family').click(function(){
    $(".family_box .list").slideToggle();
    $(this).toggleClass("on");
  })

})



// 창 크기 조절하는 이벤트가 발생하면
// 슬라이드안에 pc버전 이미지파일을 -> mobile 이미지로 변경
$(window).resize(function(){
  let num = $(this).width();
  console.log('창의사이즈',num);

  // 모바일 해상도
  if(num <= 767){
    // pc이미지에서 mobile이미지로 교체하는법
    $(".swiper .swiper-wrapper .slide1 a img").attr('src','./images/m_visual_a.jpg');
    $(".swiper .swiper-wrapper .slide2 a img").attr('src','./images/m_visual_b.jpg');

    $("main .content ul.list li:nth-child(1) a img").attr('src','./images/m_catalogue.jpg');
    $("main .content ul.list li:nth-child(2) a img").attr('src','./images/m_video.jpg');
    $("main .content ul.list li:nth-child(3) a img").attr('src','./images/m_product.jpg');
    $("main .content ul.list li:nth-child(4) a img").attr('src','./images/m_athletic.jpg');
    $("main .content ul.list li:nth-child(5) a img").attr('src','./images/m_camping.jpg');
  }else{
    // pc 기기
    $(".swiper .swiper-wrapper .slide1 a img").attr('src','./images/visual_a.jpg');
    $(".swiper .swiper-wrapper .slide2 a img").attr('src','./images/visual_b.jpg');

    $("main .content ul.list li:nth-child(1) a img").attr('src','./images/cata_ot.jpg');
    $("main .content ul.list li:nth-child(2) a img").attr('src','./images/video_ot.jpg');
    $("main .content ul.list li:nth-child(3) a img").attr('src','./images/product_ot.jpg');
    $("main .content ul.list li:nth-child(4) a img").attr('src','./images/athletic_ot.jpg');
    $("main .content ul.list li:nth-child(5) a img").attr('src','./images/camping_ot.jpg');
  }
})

// 창 크기 조절하는 이벤트 없이 반응형
let num = $(this).width();
  console.log('창의사이즈',num);

  // 모바일 해상도
  if(num <= 767){
    // pc이미지에서 mobile이미지로 교체하는법
    $(".swiper .swiper-wrapper .slide1 a img").attr('src','./images/m_visual_a.jpg');
    $(".swiper .swiper-wrapper .slide2 a img").attr('src','./images/m_visual_b.jpg');

    // 모바일 이미지로 교체
    $("main .content ul.list li:nth-child(1) a img").attr('src','./images/m_catalogue.jpg');
    $("main .content ul.list li:nth-child(2) a img").attr('src','./images/m_video.jpg');
    $("main .content ul.list li:nth-child(3) a img").attr('src','./images/m_product.jpg');
    $("main .content ul.list li:nth-child(4) a img").attr('src','./images/m_athletic.jpg');
    $("main .content ul.list li:nth-child(5) a img").attr('src','./images/m_camping.jpg');
  }else{
    // pc 기기
    $(".swiper .swiper-wrapper .slide1 a img").attr('src','./images/visual_a.jpg');
    $(".swiper .swiper-wrapper .slide2 a img").attr('src','./images/visual_b.jpg');

    // pc이미지로 교체
    $("main .content ul.list li:nth-child(1) a img").attr('src','./images/cata_ot.jpg');
    $("main .content ul.list li:nth-child(2) a img").attr('src','./images/video_ot.jpg');
    $("main .content ul.list li:nth-child(3) a img").attr('src','./images/product_ot.jpg');
    $("main .content ul.list li:nth-child(4) a img").attr('src','./images/athletic_ot.jpg');
    $("main .content ul.list li:nth-child(5) a img").attr('src','./images/camping_ot.jpg');
  }


  // 햄버거 버튼 클릭시 메뉴 날라오는거
  $(function(){
    $(".m_btn").click(function(){
      $('.cover').fadeIn();
      $(".m_menu_wrap").addClass('on');
      // 메인 스크롤바 없애기
      $('body,html').css({"overflow":"hidden"});
      // 모바일 메뉴 스크롤바 보이게
      $(".m_menu_wrap").css({'overflow':"auto"});
    })

    // cover 영역을 클릭하면 모바일 메뉴 닫기
    $(".cover").click(function(){
      $(".m_menu_wrap").removeClass("on");
      $('.cover').fadeOut();
      // 메인 스크롤바 보이게함
      $('body,html').css({"overflow":"auto"});
    })
  })

  // depth2 2단 메뉴를 안보이게 숨김
  $(".depth2").hide();

  // 2단메뉴 나오게
  // 아코디언메뉴 구현
  $(function(){
    $(".m_menu_wrap ul.m_gnb>li>a").click(function(){
      $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp();
    })



  })
