class Chart{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    drawLine(){
        console.log('draw line');
    }
}

class BarChart extends Chart{
    constructor(width,height){
        super(width,height); //상위 생성자를 불러옴
    }                       //부모한테 상속받았으면 필드를 선언 해야하나??
    draw(){
        this.drawLine();    //this는 왜 붙을까??
        console.log(`draw ${this.width} x ${this.height} barChart`);
        //백틱은 왜 사용하는거지? 출력이 편함~~~
        console.log('drwa'+this.width+'x'+this.height+'barChart');
    }   

}

const barChart1 = new BarChart(100,100);
barChart1.draw();