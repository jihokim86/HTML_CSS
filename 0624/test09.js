//객체2

const family = {
    'address' : 'seoul',                    //address 키에 대해 seoul값을 넣음
    members : {},                            // member 키에는 값이 없음
    addFamily : function(age,name,role){    //addFamily 키에 funcion()값을 넣음
        this.members[role] = {               // member키에 값이 들어가는듯함
            age : age,                      //members[role] 이게 머지???
            name : name
           
        };
    },

    getHedcount : function(){                   //getHedcount키에 funcion()값을 넣음
        return Object.keys(this.member).length;
    }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

let printMembers = function(){
    let members = family.members;
        for( role in members){
            console.log('role=>' + role + ', name=> '+ members[role].name
            + ', age=> ' + members[role].age);
    }
};
printMembers();

let members = family.members;
members['nephew'] = {age:3, name:'hyun'}  //삽입      //이거 보면..role값이 미리들어가 있네
members.niece = {age:5, name: 'lyn'};       //수정
delete members.aunt;                    //삭제
delete members['dog'];                  //삭제
printMembers();