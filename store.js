class Industrial{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    information(){
        console.log(`[${this.name}]: ${this.price}원`);
    }
}

class Factory{
    constructor(name = 'factory'){
        this.mame = name;
        this.product = [];
    }
    serch(name){
        for(let product of this.product){
            if(name == product.name){
                return product;
            }
        }
        return null;
    }
    make(industrial){
        if(this.serch(industrial.name) == null){
            this.product.push(industrial)
            console.log(`공장에 [${industrial.name}] 등록하였습니다`);
        }
        else console.log(`공장에 [${industrial.name}] 등록되어 있습니다`);
    }
    information(){
        console.log(`=========================공장 현황========================`);
        for(let product of this.product){
            product.information();
        }
        console.log(`==========================================================`);
    }
}

class product{
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.stock = 0;
        this.salesVolume = 0;
    }
    information(client = 'guest'){
        if(client == "guest"){
            console.log(`[${this.name}]: ${this.price}원`);
        }
        else if(client == "sale"){
            console.log(`[${this.name}]: 판매량[${this.salesVolume}]: ${this.salesVolume*this.price}원`);
        }
        else if(client == "stock"){
            console.log(`[${this.name}]: ${this.stock}`);
        }
        else{
            console.log(`[${this.name}]: ${this.price}원, 판매량[${this.salesVolume}]: ${this.salesVolume*this.price}원, 재고[${this.stock}]`);
        }

    }

}

class Store{
    constructor(name, location){
        this.name = name;
        this.location = location;
        this.product = [];
        this.money = 100000;
        console.log(`${location}에서 [${name}]오픈`);
    }
    serch(name){
        for(let product of this.product){
            if(name == product.name){
                return product;
            }
        }
        return null;
    }
    registration(product){
        if(this.serch(product.name) == null){

            this.product.push(product);
            console.log(`가게에 [${product.name}]: ${product.price}원 등록하였습니다`)
        }
        else console.log("가게에 이미 등록된 제품입니다");
    }
    order(factory, name, many=1){
        let product = this.serch(name);
        let industrial = factory.serch(name);
        if( industrial !== null){
            if(product !==null){
                if(this.money > industrial.price*many){
                    product.stock += many;
                    this.money -= industrial.price*many;
                    console.log(`공장에서 [${name}]: ${industrial.price}원, ${many}개 총${industrial.price*many}원에 구매하였습니다`);
                }
                else console.log(`가게에 돈이 부족합니다`);
            }
            else console.log(`가게에 [${name}] 물품이 등록되어 있지않습니다 먼저 등록해주세요`);
        }
        else console.log(`공장에 [${name}] 물건이 없습니다`);
    }
    information(client = 'guest'){
        console.log(`=========================물건 현황========================`);
        if(client == 'guest'){
            for(let product of this.product){
                product.information('guest');
            }
        }
        else if(client == 'sale'){
            for(let product of this.product){
                product.information('sale');
            }
        }
        else if(client == 'stock'){
            for(let product of this.product){
                product.information('stock');
            }
        }
        else{
            for(let product of this.product){
                product.information('all');
            }
            console.log(`가게의 돈은 ${this.money}원 있습니다`);
        }
        
        console.log(`==========================================================`);
    }
    buy(name, many = 1){
        let product = this.serch(name);
        if(product !==null){
            if(product.stock > 0){
                product.stock -= many;
                product.salesVolume += many;
                this.money += product.price*many;
                console.log(`가게에서 [${name}]: ${product.price}원, ${many}개 총${product.price*many}원에 구매하였습니다`);
            }
            else{
                console.log(`[${name}] 물품의 재고가 없습니다`);
            }
        }
        else console.log(`[${name}] 물품이 등록되지 않았습니다`);
    }

}

let store = new Store("상점", "DIT");
let factory = new Factory();
factory.make(new Industrial('pen', 700));
factory.make(new Industrial('ruler', 1000));
factory.make(new Industrial('book', 5000));
factory.make(new Industrial('note', 3000));

store.registration(new product('pen', 1000));
store.registration(new product('ruler', 1500));
store.registration(new product('book', 7000));
store.registration(new product('pencil', 700));

factory.information();
store.information("guest",13);
store.order(factory, 'pen',8);
store.order(factory, 'ruler',5);
store.order(factory, 'book',1000);

store.information('all');