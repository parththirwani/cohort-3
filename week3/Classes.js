class Rectangle{
    constructor(width,hieght,color){
        this.width=width;
        this.hieght=hieght;
        this.color=color;
    }
    area(){
        const area= this.width*this.hieght;
        return area;
    }
    paint(){
        console.log(`The rectangle is painted with ${this.color} color`);
    }
}
const rect= new Rectangle(2,4,"blue")
console.log(rect.area());
console.log(rect.paint());