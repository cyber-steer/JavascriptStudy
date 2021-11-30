/**
 * 100을 초과하지 않는 최대 합계와 합산된 요소의 수를 출력하기
 * while반복문 이용
 * 2021. 10. 5.
*/

let array = [2, 4, 10, 22, 33, 7, 17, 31, 90, 52];
let i = 0;
let sum =0;

//while문으로 합계 구하기.
while(i < array.length){
    if((sum + array[i]) <100)
        sum += array[i++];
    else break;
}

console.log(`${i}개의 합계는 ${sum}`);