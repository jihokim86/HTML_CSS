//생성자 함수
//- 객체에 타입이 적용되면 객체는 그 타입의 인스턴스라고 한다.

function Teacher(name,age,subject){
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function(student){
        console.log(student+"에게"+this.subject+"를 가르칩니다.");
    };
}

const jay = new Teacher('jay',30,'javascript');

console.log(jay);
console.log(Teacher.teach); //undefined
console.log(jay.teach);     //[Function (anonymous)]
console.log(jay.name);      //jay

console.log("-----------------------------------------------")
jay.teach('bbo');          // bbo에게javascript를 가르칩니다.
console.log(jay.teach);    // [Function (anonymous)]

console.log("-----------------------------------------------")
console.log(jay.constructor);        //[Function: Teacher]
console.log(jay instanceof Teacher); //true

console.log("-----------------------------------------------")
const jay2 = new Teacher('jay',30,'javascript');
console.log(jay2);


// console.log(jay2);  //오류
// console.log(age);       //오류

