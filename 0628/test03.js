// es6부터 class 키워드를 통해 클래스를 정의할 수 있음.

class Cart{
    constructor(){
        this.store={};
    }

    addProduct(product){
        this.store[product.id] = product;
    }

    getProduct(id){
        return this.store[id];
    }
}

const cart1 = new Cart();

cart1.addProduct({id:1,name:'노트북'});
console.log(cart1.store);   //{ '1': { id: 1, name: '노트북' } }

const p = cart1.getProduct(1);
console.log(p);     //{ id: 1, name: '노트북' }