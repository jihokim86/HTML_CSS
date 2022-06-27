//ES6에 추가된 화살표 함수
const double = x => x+x;
console.log(double(2));     //4

/*
 * function double(x){
 *  return x+x;
 * }
 */

const add=(a,b) => a+b;
console.log(add(1,2));      //3


function add2(a,b){
    return a+b;
}
console.log(add2(1,2))      //3

const sum = (...args)=> {
    let total = 0;
    for(let i=0; i<args.length;i++){
        total += args[i];
    }
    return total;
}

// function sum(...args)  {
//     let total = 0;
//     for(let i=0; i<args.length;i++){
//         total += args[i];
//     }
//     return total;
// }

console.log(sum(1,2,3));    //6

setTimeout(()=>{
    console.log('화살표함수')
},10);