//En base al siguiente código: añadir una función para pasar de Farenheit a Celsius:

let temperatura  = +prompt("Ingrese los Grados Farenheit: ")

function pasaraCelsius(grado){
     return ((grado - 32) / 1.8)
}

var result = pasaraCelsius (temperatura);
alert (result);


    