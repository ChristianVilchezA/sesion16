/*Realizar un programa con una función. Esta función muestra en pantalla 
    la suma de dos números introducidos por el usuario. */

let num1 = +prompt("Ingresa Numer° 1: ")
let num2 = +prompt("Ingresa Numero 2: ")

function sumar(x,y){
     return (x+y)
}
var result = sumar (num1,num2);
document.write (`La suma de los Numeros ${num1} + ${num2} es: ${result}`);











