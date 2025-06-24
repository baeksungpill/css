$(function(){
    // gnb에 마우스 가져다대면 header_wrap 높이 변경 321
    $(".gnb").mouseenter(function(){
        $(".header_wrap").stop().animate({'height':321},200);
        $(".depth2").show();
    })



    // 벗어나면 다시 높이 원래대로 70
    $(".header_wrap").mouseleave(function(){
        $(".header_wrap").stop().animate({'height':70},200);
        $(".depth2").hide();

    })


})