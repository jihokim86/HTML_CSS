//while

const hometonw = [
    {name:"진",city:"과천"},
    {name:"남준",place:"일산",city:"경기도"},
    {name:"호석",place:"광주",city:"전라도"},
    {name:"지민",place:"부산",city:"경상도"}
];

console.log(hometonw);


let isHometown = function(h,name){
    console.log(`함수가 실행되었습니다.${h.city} 도시에서 ${name}을 찾습니다.`); //백틱 사용

    if(h.name === name){ //값과 데이터형식까지 비교 '===' ,  값만비교 '==' , 대입 '='
        console.log(`${h.name}의 고향은 ${h.city}${h.place}입니다.`)
        return true;
    }
    return false;
}

let h;
while(h=hometonw.shift()){ //배열을 한칸씩 이동하는 조건 hometonw[0].name 이런 느낌~
    if(!h.name || !h.place || !h.city) continue; //h.name==null; 이런형식으로 해야하지 않나?
    //hometown[0].name = '진' 아닌가? !'진' => ???
    var result = isHometown(h,'호석');
    if(result) break;
}

let i=0;
const names =['남준','정국','윤기','호섭'];
const cities = ['경기','부산','대구','광주'];
do{
    hometonw[i]={name:names[i],city:cities[i]};
    i++;
}while(i<4);
console.log(hometonw);