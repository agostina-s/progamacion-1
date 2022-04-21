function calcular_raiz(a,b,c){

    const parte1 = Math.pow(b,2) - (4 * a * c)
    const parte2 = Math.sqrt (parte1)
    const parte3 = -b + parte2
    const parte4 = -b - parte2
    const resultado1 = (parte3 / (2 * a))
    const resultado2 = (parte4 / (2 * a))
    return 'Raiz 1 = '+resultado1.toFixed(2) +' | Raiz 2 = '+ resultado2.toFixed(2)
}

function mostrar_resultado(){
    const a = document.getElementById("inp_a").value
    const b = document.getElementById("inp_b").value
    const c = document.getElementById("inp_c").value
    const resultado_calc = calcular_raiz(a,b,c)

    alert (resultado_calc)
}