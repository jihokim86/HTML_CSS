//for 문 - length 이용

const homtonw = [
    {name:"남준",place:"일산",city:"경기도"},
    {name:"지호",place:"안산"},
    {name:"윤경",place:"광주",city:"전라도"},
    {name:"지민",place:"부산",city:"경상도"}
];

for(var i=0;i<homtonw.length;i++){
    var h = homtonw[i];
    if(!h || !h.city) continue;
    
    console.log(i+"번째 실행입니다.");

    if(h.name=="지민"){
        console.log(h.name + "의 고향은"+h.city+" "+h.place+"입니다.");
        break;
    }
}