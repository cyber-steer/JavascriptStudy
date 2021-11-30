/**
 * 클래스 (class) 정의 연습
 * 2021. 10. 19.
 */

class Product{
    //constructor()는 속성만 정의한다. 생성자 역할
    constructor(name, price){
        this.number = 3;
        this.name =name;
        this.price = price;
    };
    intro(){
        console.log(`제품 [${this.name}]의 가격은 ${this.price}원 입니다`);
    };
    //getter method 정의
    getName(){
        return `제품명은 ${this.name}입니다`;
    };
    getPrice(){
        return this.price;
    };
}
//위에서 정의한 class로 객체 생성하기
let p1 = new Product('pen', 1000);
let p2 = new Product('note', 2000);

p1.intro();
p2.intro();

console.log(p1.getName());