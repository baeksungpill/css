$(function(){
    $('.slide').slick({
    autoplay: true,
    arrows: false,
    autoplayspeed: 3000,
    fade:true
   });
    $(".notice ul li:first-child a").click(function(){
        $(".cover").show();
        $(".popup").show();
    })
    $(".popup .btn_close").click(function(){
        $(".popup").hide();
        $(".cover").hide();
    })
    // 패밀리 사이트
    $("footer .family .fm").click(function(){
        $("footer .family ul").toggle();
    })
    // 2단메뉴
    $(".gnb").mouseenter(function(){
        $(".depth2,.gnbbg").show();
    })
    $(".gnb").mouseleave(function(){
        $(".depth2,.gnbbg").hide();
    })
})