//자료형 변환하기

console.log("5"+1);         //51
console.log("5"-1);         //4
console.log("5"*2);         //10
console.log("There is"+5);  //There is5
console.log("Five"*2);      //NaN

console.log('- 연산자를 활용한 자료형 변화')
let str = 5 +"1";
console.log(str);           //51
console.log(typeof str);    //string

var num = str ++;
console.log(num);           //51
console.log(typeof num);    //number


console.log('- 함수를 활용한 자료형 변화')

str = String(num);
console.log(str);           //51
console.log(typeof str);    //string 

num = Number(str);
console.log(num);           //51
console.log(typeof num);    //number
