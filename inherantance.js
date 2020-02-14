class figure {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    
    area() {
      return this.width * this.height;
    }
    static getName(){
        console.log("fgure");
    }
  }
  
  class rectangle extends figure {}
  
  class triangle extends figure {
    area() {
      return (this.width * this.height) / 2;
    }
  }
  
  class tnombre extends triangle {
    constructor(height, width, name) {
      super(height, width);
      this.name = name;
    }
    showName() {
      console.log(this.name);
    }
  }
  var rectangulo = new rectangle(12, 4);
  var triangulo = new triangle(12, 4);
  var nombre = new tnombre(12,4,"Holi");
  console.log(nombre.showName());
  console.log(rectangulo.area());
  console.log(triangulo.area());
  figure.getName();