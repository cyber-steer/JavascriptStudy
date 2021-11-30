let sample = "hello/world!";
let count;
for(let i=sample.length-1;i>=0;i--){
    if(sample.charAt(i) =='/'){
        count=i;
    }
    console.log(sample.charAt(i));
}
let result = sample.substring(count+1, sample.length-1);
console.log(result);