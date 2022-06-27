var cart = [
    {name : '옷' , price:2000},
    {name : '가방', pricae:1000}
]

// if(cart[0].name == null) console.log(aa);
// if(cart[0].name == '옷') console.log(aaa);


let numOfItem = `카드에 ${cart.length}개의 아이템이 있습니다.`;
var cartTable =
`
    <ul>
    <li>품목 : ${cart[0].name},가격:${cart[0].price}</li>
    <li>품목 : ${cart[1].name},가격:${cart[1].price}</li>
    </ul>
`;

console.log(numOfItem);
console.log(cartTable);

let personName = 'harin';
let helloString = 'hello'+personName;
let helloTemplateString = `hello ${personName}`;

console.log(helloString); //helloharin
console.log(helloTemplateString); //hello harin

console.log(helloString === helloTemplateString); //false

console.log(typeof helloString);            //string
console.log(typeof helloTemplateString);    //string
