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
  $(".m_gnb>ul>li>a").removeClass("on");
  $(this).toggleClass("on");
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

// 왼쪽아이콘 중에 li를 클릭하면 on클래스 추가
$("ul.left_icon li").click(function(){
  $("ul.left_icon li").removeClass('on')
  $("ul.right_icon li").removeClass('on')
  $(this).addClass("on")
})
// 오른쪽아이콘 li를 클릭하면 on클래스 추가
$("ul.right_icon li").click(function(){
  $("ul.right_icon li").removeClass('on')
  $("ul.left_icon li").removeClass('on')
  $(this).addClass("on")
})


// 쿠키정보를 확인해서 쿠키정보가 있으면 숨기고, 없으면 열림
if(GetCookie('subway')=='today'){
  $('.popup').hide();
}else{
  $('.popup').show();
}

// 팝업창 스크립트
$("#today_close,.popup .close label").click(function(){
  // setCookie 함수를 호출
  if($("#today_close").is(':checked')){
  // Cookie정보를 생성한후 popup창은 안보이게 숨김
  setCookie('subway','today',1);
  $(".popup").hide()
  }else{
  $('.popup').hide()
  }
})

// 닫기 버튼 클릭시 팝업창 숨김
$('.popup .close .txt_btn').click(function(){
  $('.popup').hide();

})


// GetCookie (Cookie 정보)
function GetCookie(name){
				var value=null, search=name+"=";
				if(document.cookie.length > 0){
					var offset=document.cookie.indexOf(search);
					if(offset != -1){
						offset+=search.length;
						var end=document.cookie.indexOf(";", offset);
						if(end == -1) end=document.cookie.length;
						value=unescape(document.cookie.substring(offset, end));
					}
				} return value;
			}
			// SetCookie
			function setCookie(name, value, expiredays){
				var days=10;
				if(days){
					var date=new Date(); 
					date.setTime(date.getTime()+(days*24*60*60*1000));
					var expires="; expires="+date.toGMTString();
				}else{
					var expires=""; 
				}
				document.cookie=name+"="+value+expires+"; path=/";
			}












})