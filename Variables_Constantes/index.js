
function mostrar() {
    //DEcalaramos una variable
    let num = 15;
    //Se imprime en la consola del navegador
    console.log (num)
}
function evaluar (){

    var dato = 22;
    //condicion
    if(dato > 10){
         var dato = 77
         console.log(dato)
    }
    console.log(dato)
}


function validar(){
     const valor = prompt('Ingrese calificacion')
    
    //forma 1
    /*if(valor >= 7){
        alert('Aprobaste rey!')
    }else{
        alert('A diciembre pa!')
    }*/

    //Exprexion ternaria
//(valor >= 7)? alert ('Ves que si podias tarado!') : alert('Tampoco esperaba mucho!')

}

//Invocamos la funcion validar
//validar()
function calcular(){
    //forma 1
    //const dato = document.getElementById("inp_dato1").value
    
    //forma 2
    const dato = document.querySelector("#inp_dato1").value

    const resultado = dato * 10;

    alert (resultado)
}