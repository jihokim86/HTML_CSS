//호이스팅(끌어올리기)-함수를 선언하기 전에 호출이 가능
//일반적으로는 함수를 선언 후 호출하지만 호출 후 선언이 가능한 것.

hello();

function hello(){
    console.log("hello");
}


// 아래와 같은 경우는 함수선언 후 호출 해야함~
//hello2(); //에러발생
let hello2 = function(){
    console.log("hello");
}
hello2();   //정상적으로 호출됨