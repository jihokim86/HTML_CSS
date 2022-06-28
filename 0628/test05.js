//클래스에서 정적 메소드 - static
// static - 지역변수이면서 전역변수
//(메모리주소를 공유함=초기화는 1번만 함=기억함)

class Product{
    static build(name,price){
        const id = Math.floor(Math.random()*1000);
        return new Product(id,name,price);
    }
    
    static getTaxPrice(product){
        return (product.price*0.1)+product.price;
    }

    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}


class DeposableProduct extends Product{
    depose(){
        this.deposed = true;
    }
}

const gum = Product.build('껌',1000);
console.log(gum); //Product { id: 358, name: '껌', price: 1000 }

const clothes = new DeposableProduct(1,'옷',2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);  //2200