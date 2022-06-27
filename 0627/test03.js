//ES6에서 추가된 나머지 매개변수

function sum(...args){
    let total = 0;
    for(let i=0;i<args.length;i++){
        total +=args[i];
    }

    console.log(args.indexOf(1));
    return total;
}

console.log(sum(1,2,3));


function sum2(a,b,...other){
    let total = a+b;
    for(let i=0;i<other.length;i++){
        total +=other[i];
    }

    return total;
}

console.log(sum2(1,2));
console.log(sum2(1,2,3,4));