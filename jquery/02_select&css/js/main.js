// 제이쿼리 사용할 준비작업
$(function(){
    // 제이쿼리 문법은 항상 $("선택자").명령함수()
    // 명령함수 css("") -> jquery 프로그램으로 css접근할때 사용

    $("h1").css({"color":"red"});
    $(".date").css({"font-size":"80px","color":"pink",
        "background":"purple"});
    $(".para").css({"font-size":"10px",
        "border":"10px solid blue"
    });
    $("ul li:last-child").css({"font-size":48});
    $("a").css({"padding":"10px","border":"solid 5px blue"})
})