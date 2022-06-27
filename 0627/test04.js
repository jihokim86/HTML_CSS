//자바스크립트는 기본적으로 전역과 함수 단위로 스코프를 행성
//위치에 따라 전역과 지역으로 나뉨

var a=10;
console.log(a);

function print(){
    var b=20;
    if(true){
        var c = 30;
    }
    console.log(c);
}

print();
console.log(b);