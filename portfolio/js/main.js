// scrolltrigger를 gsap애니메이션에 등록
gsap.registerPlugin(ScrollTrigger);

let header = document.querySelector("header");
console.log(header);
let mbtn = document.querySelector(".m_btn");
console.log(mbtn);
mbtn.addEventListener("click",function(){
    header.classList.toggle("on");
})


$(function(){

gsap.timeline({
    scrollTrigger:{
        scrub:2,
        trigger:".about",
        start:"0% 100%",
        end:"0% 20%",
        // markers:true,
    },
})
.to(".about",{background:"#000",color:"#00c9c8",ease:'none',duration:5},0)
.fromTo(".about span",{x:'-1200px'},{x:'0%',ease:'easeInOutElastic',duration:5},0)

gsap.timeline({
    scrollTrigger:{
        scrub:2,
        trigger:".contact",
        start:"0% 100%",
        end:"0% 20%",
        // markers:true,
    },
})
.to(".contact",{background:"#000",color:"#00c9c8",ease:'none',duration:5},0)
.fromTo(".contact span",{x:'-1200px'},{x:'0%',ease:'easeInOutElastic',duration:5},0)


gsap.timeline({
    scrollTrigger:{
        scrub:2,
        trigger:".codding",
        start:"0% 100%",
        end:"0% 20%",
        // markers:true,
    },
})
.to(".codding",{background:"#000",color:"#00c9c8",ease:'none',duration:5},0)
.fromTo(".codding span",{x:'-1200px'},{x:'0%',ease:'easeInOutElastic',duration:5},0)

gsap.timeline({
    scrollTrigger:{
        scrub:2,
        trigger:"#section2 .s2_rightbox .skill .list li",
        start:"0% 100%",
        end:"0% 40%",
        // markers:true,
    },
})
.fromTo(".gagein",{x:'-100%'},{x:'0%',ease:'easeInOutElastic',duration:5},0)



gsap.timeline({
    scrollTrigger:{
        scrub:2,
        trigger:".design",
        start:"0% 100%",
        end:"0% 20%",
        // markers:true,
    },
})
.to(".design",{background:"#000",color:"#00c9c8",ease:'none',duration:5},0)
.fromTo(".design h2 p.a",{x:'-1200px'},{x:'0%',ease:'easeInOutElastic',duration:5},0)
.fromTo(".design h2 p.b",{x:'1200px'},{x:'0%',ease:'easeInOutElastic',duration:5},0)


})


