/**
 * 배열 요소들의 합계 계산하기
 * while반복문 이용
 * 2021. 10. 5.
*/

let array = [2, 4, 10, 22, 33, 7, 17, 31, 90, 52];
let i = 0;
let sum =0;

//while문으로 합계 구하기.
while(i < array.length){
    sum += array[i++];
}

console.log(sum);