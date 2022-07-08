class Producto{
    constructor(nombre,marca,categoria,urlImage,precio,stock){
        this.nombre = nombre
        this.marca = marca
        this.categoria = categoria
        this.urlImage = urlImage
        this.precio = precio
        this.stock = stock
    }
    venta(x){
    return this.stock-x
}
nombre_completo(){
    return this.nombre+"-"+this.marca

}
}
class Compra {
    constructor(cliente,tarjeta){
        this.productos = []
        this.cliente = cliente
        this.tarjeta = tarjeta
}
agregar_producto(producto){
    this.productos.push(producto)
}

subtotal(){
  let acumulador = 0
  for(let producto of this.productos){
    acumulador = acumulador + producto.precio
  }
  return acumulador
}
total() {
    let precioIva = this.subtotal()*1.21
    let preciofinal = 0
    if(this.tarjeta){
        preciofinal = precioIva*1.15
    }else{
        preciofinal = precioIva
    }
    return preciofinal.toFixed(2)
 }
}
let cliente = prompt("Ingresar cliente")
let tarjeta = confirm("¿Desea pagar con tarjeta?")
let compra = new Compra(cliente,tarjeta)

function agregar_producto(){
    let nombre = document.getElementById("producto").value
    let marca = document.getElementById("marca").value
    let categoria = document.getElementById("categoria").value
    let urlImage = document.getElementById("urlImagen").value
    let precio = parseInt(document.getElementById("precio").value)
    let stock = document.getElementById("stock").value
    let producto = new Producto(nombre,marca,categoria,urlImage,precio,stock)
    compra.agregar_producto(producto)
    let div1 = document.getElementById("demo")
    let div2 = document.createElement("div")
    div2.className += "card"
    let div3 = document.createElement("div")
    div3.textContent = producto.nombre_completo()
    div3.className = "list-group-item m3"
    div2.appendChild(div3)
    div1.appendChild(div2) 
}

function calcular_total(){
    console.log(compra.productos)
    document.getElementById("subt").innerHTML = compra.subtotal()
    document.getElementById("total_").innerHTML = compra.total()
}
