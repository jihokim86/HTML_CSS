//객체1

const family = {
    'address' : 'seoul',                    //address 키에 대해 seoul값을 넣음
    member : {},                            // member 키에는 값이 없음
    addFamily : function(age,name,role){    //addFamily 키에 funcion()값을 넣음
        this.member[role] = {               // member키에 값이 들어가는듯함
            age : age,
            name : name
        };
    },

    getHedcount : function(){                   //getHedcount키에 funcion()값을 넣음
        return Object.keys(this.member).length;
    }
};

family.addFamily(30,'chloe','aunt');
family.addFamily(3,'lyn','niece');
family.addFamily(10,'dangdnagi','dog');

console.log(family.getHedcount())       //3