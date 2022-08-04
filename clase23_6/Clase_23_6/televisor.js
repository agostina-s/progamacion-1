class Televisor {
    constructor(tamaño,marca,modelo,resolucion,estado){
        this.tamaño = tamaño
        this.marca = marca
        this.modelo = modelo
        this.resolucion = resolucion
        this.estado = estado
    }
    datos_televisor(){
        return this.marca+"-"+this.modelo+"|"+this.tamaño+" pulgadas, "+this.resolucion+" ("+ this.estado+")"
    }
}
function ingresar_televisor(){
    let tamaño = document.getElementById("tamaño").value
    let marca = document.getElementById("marca").value
    let modelo = document.getElementById("modelo").value
    let resolucion = document.getElementById("resolucion").value
    let estado = document.getElementById("estado").value
    let televisor = new Televisor(tamaño,marca,modelo,resolucion,estado)
    let div = document.getElementById("demo")
    let p = document.createElement("p")
    p.textContent = televisor.datos_televisor()
    p.className += "card"
    div.appendChild(p)
}