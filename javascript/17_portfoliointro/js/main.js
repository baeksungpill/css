function time(){
    // Dom객체를 선택해서 변수에 저장
    let webHour = document.querySelector(".web_hour");
    let webMin = document.querySelector(".web_min");
    let webSec = document.querySelector(".web_sec");
    let webMsec = document.querySelector(".web_msec");
    console.log(webHour, webMin, webSec, webMsec);

    let webYear = document.querySelector(".web_year");
    let webMon = document.querySelector(".web_mon");
    let webDay = document.querySelector(".web_day");

    let date = new Date();
    console.log(date);

    let year = date.getFullYear();
    console.log(year);
    webYear.innerHTML = year;
    let mon = date.getMonth() + 1;
    webMon.innerHTML = mon;
    let day = date.getDate();
    webDay.innerHTML = day;

    // 시간
    let hour = date.getHours();
    console.log(hour);
    // 2자리로 만드는 함수
    let dhour = digit(hour)
    webHour.innerHTML = dhour;
    // 분
    let min = date.getMinutes();
    console.log(min);
    let dmin = digit(min)
    webMin.innerHTML = dmin;
    // 초
    let sec = date.getSeconds();
    console.log(sec);
    let dsec = digit(sec);
    webSec.innerHTML = dsec;
    // 밀리 초
    let msec = date.getMilliseconds();
    console.log(msec);
    // 밀리 초는 2자리로 쓸려면 수식이 따로 있음 ↓
    msec = Math.floor(msec/10)
    let dmsec = digit(msec);
    webMsec.innerHTML = dmsec;

    // 시간,분,초,밀리초 자릿수를 2자리로 만드는 함수
    function digit(x){
        if(x<10){
            return '0' + x;
        }else{
            return x;
        }
    }
}
// 매 1초마다 time함수를 반복실행
setInterval(function(){
    time();
},100)