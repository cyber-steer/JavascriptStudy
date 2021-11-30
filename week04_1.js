/*
    배열의 요소와 요소의 자료형을 함께 출력하기
    출력형식: 요소값(자료형) 예: 123(number)
    2021.09.23

    사용할 반복문 : for in
*/
let array = [3, 'DIT', false, undefined, {}, function() {},[]];

for(let i in array){
    console.log(`array[${i}] = ${array[i]}, (${typeof(array[i])})`);
}

console.log("===========================");
// for-of 문을 이용하여 위와 비슷한 출력하기
//출력형식 : 요소값(자료형)

for(let item of array){
    console.log(item + ', ('+typeof(item)+')');
}