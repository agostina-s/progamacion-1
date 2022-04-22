let facturas = ['Cara sucia','Media-luna dulces','Cañoncitos de dulce de leche','Cañoncitos de crema pastelera'] 

//logitud de arreglo
//cantidad de eleentos de un arreglo
const longitud = facturas.length
console.log('Longitud:' + longitud)

//acceder a un elemento del array mediante su indice
const primero = facturas[0]
console.log('El primer elemento es: ' + primero)

//acceder al ultimo elemento de de un arreglo
const ultimo = facturas[longitud - 1]
console.log('El ultimo elemento del arreglo es:' + ultimo)

//recorrer un array usando foreach
facturas.forEach((element, index) => {
    console.log(index+'-'+element)
});

//agregar un nuevo elemento al final del arreglo
facturas.push('Rosquitas')
console.log(facturas)

//eliminar al ultimo elemento de un arreglo 
facturas.pop()
console.log(facturas)

//agregar un alemento al inicio de un arreglo
facturas.unshift('Rosquitas')
console.log(facturas)

//eliminar el primer elemento de un arreglo
facturas.shift()
console.log(facturas)

//obtener el indice de un elemento
const indice = facturas.indexOf('Cañoncitos de dulce de leche')
console.log('El indice del cañoncito es: '+ indice)

//eliminar elemento del arreglo usando su indice
facturas.splice(indice, 1)
console.log(facturas)

//eliminar mas de un elemento de un arreglo
const indice_ml = facturas.indexOf('Media-luna dulces')
const eliminados = facturas.splice(indice_ml,2) //si lo guardo en una constante eliminados informa de los elementos que borra
console.log('Eliminados :'+ eliminados)
console.log(facturas)

//generar una copia de un arreglo
const copiaFActuras = facturas.slice()
copiaFActuras.push('Rosquitas','Cañoncitos de dulce de leche','Churros')
console.log('Copia: '+ copiaFActuras)
console.log('Original: '+ facturas)

//agregar elementos en medio de un arreglo
copiaFActuras.splice(2,0,"Bizcochitos")
console.log(copiaFActuras)