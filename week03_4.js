/**
    정수로 채워진 배열에서 홀수만 출력하기
    2021.09.23

    구현조건 : for-of 를 사용하기
 */
let arr=[3, 32, 53, 48, 49];

for(let item of arr){
    if(item % 2 == 1) //item이 홀수이면
        console.log(item); 
}