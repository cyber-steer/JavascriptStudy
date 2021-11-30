/**
 * 생성자 함수 정의 연습
 * 2021. 10. 19
 */

//(객체)생성자 함수 정의 => java의 class역할
function Product(name, price){
    //생성자 함수 호출 직후에 빈 객체 {}가 생성되고 this와 연결한다.
    this.name = name;
    this.price = price;
    this.intro = ()=>{
        console.log(`제품 [${this.name}]의 가격은 ${this.price}원 입니다`);
    };
    this.getName = function(){
        console.log(`이름: ${this.name}`);
    };
}
//생성자 함수를 이용하여 객체를 생성
let p1 =new Product('pen', 1000);
p1.brand = 'monami'; // 단일객체의 속성 추가 가능

let p2 = new Product('note', 2000);

console.log(p2.name);
p1.intro();
p1.getName();