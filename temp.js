class A{
    constructor(name){
        this.name = name;
    }
}
class B{
    constructor(product, price){
        this.product= product;
        this.price =price;
    }
}
class C{
    constructor(proto){
        this.proto =[]
    }
    add(product){
        this.proto.push(product);
    }
}
let aa = new A("name");
console.log(aa.name);
let bb = new B(aa,3000);
console.log(bb.product.name);
console.log(bb.price);
let cc = new C();
cc.add(bb);
console.log(cc.proto[0].product.name);


cc.add(new B(new A("cc"), 2000));
console.log(cc.proto[1].price);