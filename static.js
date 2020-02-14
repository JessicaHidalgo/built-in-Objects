class rectangle{
    constructort(height,width){
        this.height=height;
        this.width=width;
    }
    //Experimental syntax
    //Babel es el traspilador que se utiliza para convertir el código 
    static staticRec(){
        return "rectangle";
    }
    area(){
        return this.height*this.width;
    }
    getstaticRec(){
        return this.constructor.staticRec();
    }
    static secondn="Hola";
}
var rect=new rectangle(12,14);
