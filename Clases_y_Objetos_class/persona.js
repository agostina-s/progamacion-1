class Persona{
    constructor(nombre,apellido,anioNac,dni,cuil,direccion){
        this.nombre = nombre
        this.apellido = apellido
        this.anioNac = anioNac
        this.dni = dni
        this.cuil = cuil
        this.direccion = direccion  
    }
    edad(){
        return 2022-this.anioNac
    }
    datos(){
        return "Datos de la persona: "+this.nombre+", "+this.apellido+", DNI: "+this.dni+", "+this.edad()+" años"
    }
}