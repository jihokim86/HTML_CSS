//switch ~case

var number ="자바";

switch(number){
    case 1:
        console.log('초보자를 위한 c++');
    break;

    case "자바":
        console.log('"자바"');
    break;

    case '자바': //이부분도 인식함
        console.log('자바'); 
    break;

    default:
        console.log("누구임?");
}