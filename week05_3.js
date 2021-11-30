/**
 * 배열 요소들의 합계 계산하기
 * while반복문 이용
 * for-of 사용하기
 * 2021. 10. 5.
*/

let array = [2, 4, 10, 22, 33, 7, 17, 31, 90, 52];
let sum =0;

for(let item of array){
    sum += item;
}
console.log(sum);