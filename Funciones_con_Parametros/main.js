function calcular_division(dato1,dato2){
    const resultado = dato1 / dato2     
    return resultado
}

function mostrar_resultado(){
    //forma 1
    const dato1 = document.getElementById("inp_dato1").value
    //forma 2
    const dato2 = document.querySelector("#inp_dato2").value
    //invocamos a la funcion, pero ademas lo enviamos dos parametros
    //recibimos una respuesta de la funcion calcular_division
    const respuesta = calcular_division(dato1,dato2)

    alert (respuesta)
}