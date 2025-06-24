$(function(){
    $("ul.gnb").mouseenter(function(){
        $("#header_wrap").stop().animate({"height":380},300);
        // 2단메뉴를 보이게함
        $(".depth2").show();

    })
    // 전체 박스를 벗어나면
    $("#header_wrap").mouseleave(function(){
        $("#header_wrap").stop().animate({"height":110},300);
        $(".depth2").hide();

    })

    
})