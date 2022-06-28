//const 의 정상적인 실행
//const는 재할당은 가능하지만 새로운 객체로 할당은 못하고
//객체 내부의 상태만 변경할 수 있음.

//풀이
//변수 상태일때는 변경불가능하지만~ 객체로 선언된경우 내부 속성값의 변경은 
//허용하지만 ~ 객체를 새로 할당하는것은 불가능하다.
const CONST_UESR ={name:'jay',age:30};
console.log(CONST_UESR.name,CONST_UESR.age); 

CONST_UESR.name ='jay2';
CONST_UESR.age =31;
console.log(CONST_UESR.name,CONST_UESR.age); 

CONST_UESR={name:'bbo'}; //에러 발생
const myName ='kim ';
myName ='jo'; //에러발생 , 변수변경 불가

/*실행 결과 
 * jay 30
 * jay 31
 */