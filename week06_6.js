/**
 * 콜백(Callback)함수 연습
 */

//함수 정의
let printDIT = () => {
    console.log("Hello DIT~!");
}
let printKorea = () => {
    console.log("Hello Korea~!");
}
function call5Times(cbf){
    for(let i=0;i<5;i++) cbf(); //매개변수 cbf에 담겨 넘어온 함수를 호출.
}


function helloMaker(host){
    let sayHello = function(guest = "아무개") {
        console.log(`안녕하세요 ${guest}씨, 저는 ${host}입니다.`);
    }
    return sayHello;
}
let say = helloMaker('홍길동');
let dit = helloMaker('dit');
say();
dit('a');


let a = helloMaker;
a(helloMaker);