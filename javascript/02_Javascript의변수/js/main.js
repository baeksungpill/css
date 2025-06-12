// 처음에 변수를 선언 (앞에 선언문 사용 var,let,const)
let kor = 100;
let name = "김포장기";
let just = true;

// 같은 변수에 값변경 (선언문 지워주면됨)
kor = 200;
name = "컴퓨터학원";
just = false;

// 변수의 값을 웹브라우저에 출력
document.write(kor + "<br>");
document.write(name + "<br>");
document.write(just);

// 변수의 기억된 값을 경고창에 출력
// alert(kor);
// alert(name);
// alert(just);

// 변수의 기억된 값을 console창에 출력할때
console.log(kor);
console.log(name);
console.log(just);

// 변수를 선언
// 이름, 나이, 주소 기억하는 변수를 선언

// let irum = "kd컴퓨터학원";
// let age = 30;
// let addr = "경기도 김포시 장기동";

let irum = "이젠컴퓨터학원",age=50,addr="서울시 종로구 관철동";

document.write("<br>이름=" + irum + "<br>");
document.write("나이=" + age + "<br>");
document.write("사는주소=" + addr);


// 변수선언문 const , 이 선언문으로 선언하면 데이터값을 변경할수 없음
const pi = 3.14;
pi = 12345;
document.write("<br>파이변수에 기억된 값=" + pi);