$(function(){
    $('.slide').slick({
    autoplay: true,
    arrows: false,
    autoplayspeed: 3000
});
$("footer .family .fm_btn").click(function(){
    $("footer .family ul").toggle();
})
$(".notice ul li:first-child a").click(function(){
    $(".popup").show();
    $(".wrap_bg").show();
})
$(".pop_btn").click(function(){
    $(".popup").hide();
    $(".wrap_bg").hide();
})
$(".gnb").mouseenter(function(){
    $(".depth2,.gnb_bg").show();
})
$(".gnb").mouseleave(function(){
    $(".depth2,.gnb_bg").hide();
})
})