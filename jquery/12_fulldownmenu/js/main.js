$(function(){
    // 마우스를 header에 가져다대면 header 높이를 400px로 늘리기
    $("header").mouseenter(function(){
        $("header").stop().animate({'height':'400px'})

    });



    // 마우스를 header에서 뺴면 header 높이를 다시 80px로 줄이기
    $("header").mouseleave(function(){
        $("header").stop().animate({'height':'80px'})

    });

    // 클릭하면
    $("header").click(function(){


    })
 
})