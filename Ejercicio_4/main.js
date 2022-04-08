function calcular_area_circ(radio){

    const resultado = Math.PI * Math.pow(radio,2)
    return resultado
}

function mostrar_area(){
    
    const dato1 = document.getElementById("inp_radio").value

    const respuesta = calcular_area_circ(dato1)

    alert (respuesta)
}