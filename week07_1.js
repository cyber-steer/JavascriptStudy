/**
 * 표준 내장함수 연습
 * 2021. 10. 13
 * 
 * 숫자 변환 함수 
 * perse
 */

let count = 1;
let f = function (){
    console.log(`Hello Javascript! ${count++}`);
}

let keyInterval = setInterval(f, 1000);
let stopInterval = function(){
    clearInterval(keyInterval);
}

setTimeout(stopInterval, 5300);

for (let i =0;i<10;i++){
    console.log(i);
}