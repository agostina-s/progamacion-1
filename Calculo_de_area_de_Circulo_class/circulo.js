class Circulo{
    constructor(diametro){
        this.diametro = diametro
      
    }

    area(){
        return Math.PI*(this.diametro*this.diametro)/4 
    }
    perimetro(){
        return Math.PI*this.diametro
    }
}