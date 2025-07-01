$(function(){
    $(".product_wrap ul.product2").hide();
    $(".tab li").click(function(){
        $(".tab li").removeClass("on");
        $(this).addClass("on");

        let num = $(this).index();
        console.log(num);
        $(".product_wrap .product").hide();
        $(".product_wrap .product").eq(num).show();
    })
})