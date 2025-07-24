$(function(){
    $('.slide').slick({
        autoplay:true,
        fade:true
    });
})

$(function(){
    $("ul.gnb").mouseenter(function(){
        $("#header_wrap").stop().animate({"height":380},300);
        $(".depth2").show();
        $("#header_wrap").css({'border-bottom':'1px solid #c3c3c3'});
    })

    $("#header_wrap").mouseleave(function(){
        $("#header_wrap").stop().animate({"height":110},300);
        $(".depth2").hide();
    })
})

$(function(){
    $(".product_wrap ul.product2").hide();
    $(".tab li").click(function(e){
        e.preventDefault();
        $(".tab li").removeClass("on");
        $(this).addClass("on");

        let num = $(this).index();
        console.log(num);
        $(".product_wrap .product").hide();
        $(".product_wrap .product").eq(num).show();
    })
})

$(function(){
$("footer .family .fm_btn").click(function(){
    $("footer .family ul").toggle();
})
})
