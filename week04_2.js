/*
    for-in 반복문 연습
    2021.09.23.
*/
let fruits = ['apple', 'kiwi', 'mango', 'banana'];

//기본 반복문으로 배열 요소 출력하기
console.log("======[기본 for문]=====");
for(let i =0; i< fruits.length; i++){
    console.log(fruits[i]);
}

console.log("\n=====[for-in 문]=====");
for(let i in fruits){
    console.log(fruits[i]);
}