//삼항연산자

let condition = 5>10;

condition ? console.log("left") : console.log("right");

let result = condition ? (console.log("삼항연산자 참값 표현"), "표현식1") : (console.log("삼항연산자 거짓값 표현"), "표현식2") ;

console.log(result);