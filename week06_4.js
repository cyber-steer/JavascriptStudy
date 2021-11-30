/**
 * 화살표 함수 연습
 * 2021. 10. 8.
 */

let average = (a, b) => {return (a+b)/2}
let max = (a, b) => {return (a >b) ? a :  b;}
let maxOfThree = (a, b, c) => {
    return max(max(a,b),c);
    //return max(a,b) > c ? max(a,b):c;
}

console.log(maxOfThree(10, 20, 6));