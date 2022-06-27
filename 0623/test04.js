let x =5;
let y='five';
var isTrue = true;
var empty = null;
var nothing;
var sym=Symbol('me'); //Symbol????

let item={
    price : 5000,
    count :10
}   //객체(object)

let fruits = ['apple','orange','kiwi'];

let addFruit = function(fruit){
    fruits.push(fruit);
} //이렇게 해도 되네~~~

// function addFruit(fruit){
//     fruits.push(fruit)
// }; //이렇게 해도 되네~~~

addFruit('ddd')

addFruit('watermelon');
console.log(fruits);
console.log(item);
console.log(sym);
//console.log(price); 오류
console.log(addFruit);  //[Function: addFruit]
