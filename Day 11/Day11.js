class Polygon {
    constructor(myArr) {
        this.myArr = myArr;
    }    
    
    perimeter() {
        let s = 0;
        for(let i=0;i<(this.myArr).length;i++) {
            s += this.myArr[i];
        }
        return s;
    }
} 

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());