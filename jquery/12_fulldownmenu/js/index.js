$(function(){
    $("ul.gnb").mouseenter(function(){
        $("#header_wrap").stop().animate({"height":380},300);
        // 2단메뉴를 보이게함
        $(".depth2").show();
        $("#header_wrap").css({'border-bottom':'1px solid #c3c3c3'});

    })
    // 전체 박스를 벗어나면 다시 110px으로 바뀜
    $("#header_wrap").mouseleave(function(){
        $("#header_wrap").stop().animate({"height":110},300);
        // 2단메뉴 숨김
        $(".depth2").hide();
        // $("#header_wrap").css({'border-bottom':'none'});
        

    })

    
})