// var과 let의 차이
if(true){
    
    var functionScopeValue = 'global';
    let blockScopeValue='local';
    
}

console.log(functionScopeValue);    //호출됨
console.log(blockScopeValue);       //에러발생

// 이렇기 때문에~ let를 사용해야함~
//let는 범위와 중복 불허