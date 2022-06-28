// 자바스크립트에서 객체지향(OOP) 프로그램

const teacherJay= {
    name : '제이',
    age : 30,
    teachJavaStript : function(student){
        this.name=student.name;
        student.gainExp();
    }
}

const studentBbo = {
    name : "뽀",
    age : 20,
    exp : 0,
    gainExp : function(){
        this.exp++;
    }
}

console.log(studentBbo.exp);
teacherJay.teachJavaStript(studentBbo);
console.log(studentBbo.exp);

console.log(teacherJay);