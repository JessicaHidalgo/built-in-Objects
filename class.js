class rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    area() {
      return this.height * this.width;
    }
  }
  
  var areas = new rectangle(12, 23);
  var figureArea = areas.area();
  console.log(figureArea);
class triangule {
    constructor(lado){
        this.lado=lado;
    }
    peri(){
        return this.lado*3
    }
}
var perimetro=new triangule(4);
var figureperi=perimetro.peri();
console.log(figureperi);
class circle{
    constructor(radio){
        this.radio=radio;
    }
    areac(){
        return Math.pow(this.radio,2)*Math.PI
    }
}
var circles= new circle(2);
var areacircle=circles.areac();
console.log(areacircle);