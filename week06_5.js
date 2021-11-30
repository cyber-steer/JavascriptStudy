
//함수 정의
function doubleX(n = 0){
    //매개변수 n이 없이 호출될 경우에 체크
    //if(n === undefined) n = 0; //if(!n)

    return 2*n;
    //return n === undefined ? 0 : 2*n;
}

function square(n = 0){
    return n*n;
}

function tagString(tagName = 'h1', text = '태그와 본문내용'){
    return `<${tagName}>${text}</${tagName}>`;
}

function f(a=100, b){
    console.log(`a=${a}, b=${b}`);
}
f(5);
let a = f;
a(4,5);