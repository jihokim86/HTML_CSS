// 배열 요소를 분할/변환(from)
const str = '12345678';

const distributeArr = Array.from(str);
console.log(distributeArr);

const modifiedArr = Array.from(distributeArr, el => el*2);
console.log(modifiedArr);