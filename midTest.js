/**
 * 중간고사 풀이
 */
//No.1
let name = "장성익";
let code = 201813066;

//No.2
console.log(`저는 ${name}이고, 학번은${code}입니다`);

//No.4
function min(a,b) {
    if(a>b)
        return b;
    else
        return a;
}
function min(a,b){return (a > b)? b:a;}
let min = function(a, b){return (a>b)? b: a;}
let min = (a,b) => {return (a>b)? b: a;}

//No.5
let array = [2,3,6,11,15,18];
let even = [];
let odd = [];

for(let item of array){
    if(item % 2 == 0)
        even.push(item);
    else
        odd.push(item);
}
array = [];
//-----------------
while(array.length > 0){
    let item  = array.pop();
    if(item%2 ==0)
        even.push(item)
    else
        odd.push(item)
}

//----------------------
for(let i =0;i<array.length;i++){
    if(array[i] %2 >0)
        odd[i] = array[i];
    //...
}

//No.10
let array = ["apple", 3, true, "mango", 5,{} ];
let fruits = []; // for 'string' type
let count = []; //for 'number' type
let others = []; //for other type

for(let item of array){
    switch(typeof(item)){
        case 'string':
            fruits.push(item);
            break;
        case 'number':
            count.push(item);
            break;
        default:
            others.push(item);
    }
}
//-----------------------------
for(let item of array){
    if(typeof(item) == 'string')
        fruits.push(item);
    else if (typeof(item) == 'number')
        count.push(item)
    else
        others.push(item);
}