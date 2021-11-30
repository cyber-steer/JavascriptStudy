/*
    2021. 9.16
    선언된 배열의 원소를 역순으로 출력하기
*/
let arr = ['apple', 'mango', 'kiwi', 'banana','melon'];

//배열의 원소값 역순으로 출력하기
//for문 사용 , 탬플랫 사용

for(let i=arr.length-1; i>= 0; i--){
    console.log(`${arr[i]}`);
}