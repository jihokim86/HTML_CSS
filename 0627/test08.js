//클로저 이해하기
//increase함수와 getCount 함수는 createCounterCourse()실행 컨텍스트의
//렉시컬 환경을 기억하고 있는 클로저가 됨.
function createCounterCourse(){
    let count=0;
    return{
        increase : function(){
            count++;
        },
        getCount : function(){
            return count;
        }
    };
}

const counter1 = createCounterCourse();
const counter2 = createCounterCourse();


//값이 증가한것이 유지할 것인가??
console.log(counter1.increase[0]);//undefined
counter1.increase();
counter1.increase();
console.log(createCounterCourse()); //{ increase: [Function: increase], getCount: [Function: getCount] }
console.log('count 1의 값 : '+ counter1.getCount()); //2 , 값이 보관이 된다.
counter2.increase();
console.log('count 2의 값 : '+ counter2.getCount()); //1


function sum(){
    let a =10;
    let b=5;
    return a+b;
}
console.log(sum()); //15