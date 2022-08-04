class Producto{
    constructor(nombre,marca,descripcion,tipo,precio,stock){
        this.nombre = nombre
        this.marca = marca
        this.descripcion = descripcion
        this.tipo = tipo
        this.precio = precio
        this.stock = stock
    }
    datos_producto(){
        return this.nombre+" "+this.marca+" ("+this.descripcion+") Tipo: "+this.tipo+" - Precio: $"+this.precio+" - Stock: "+this.stock
    }
    compra(cantidad){
        this.stock = this.stock - cantidad
    }
}
