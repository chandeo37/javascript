/*
console.log("Hola mundo");

var numero1 = 5;
var numero2 = 10;
nombre= "Luis";

var resultado = numero1+numero2;
console.log(resultado);

console.log( nombre + " dice que el resultado de la suma es: " + resultado);

var num1, num2, res;
num1 = prompt("Ingrese el primer numero");
console.log(num1);
num2 = prompt("Ingrese el segundo numero");
console.log(num2);
num1 = parseInt(num1);
num2 = parseInt(num2);
res = num1+num2;
alert("La suma de" + num1 + "+" + num2 + " es" + res);

function suma(num1, num2){
    res = num1+num2;
    return res;
}

function resta(num1, num2){
    res = num1-num2;
    return res;
}
function mult(num1, num2){
    res = num1*num2;
    return res;
}
function division(num1, num2){
    res = num1/num2;
    return res;
}

res = resta(num1,num2);
alert("La resta de " + num1+ "-" +num2+ "es" +res);
*/
/*Condicionales*/
/*
let numero = parseInt(prompt("Ingrese un número"));
if (numero == 1){
    alert("Seleccionaste el número 1.  Ganaste¡¡¡¡¡")
}else{
    alert("Sigue participando");
}*/

/*Swich case*/
let num = parseInt(prompt("Ingrese un número"));

switch (num){
    case 1:
        alert("La opcion ingresada es 1");
        break;
    case 2:
        alert("La opcion ingresada es dos");
        break;
    case 3:
        alert("La opcion ingresada es tres");
        break;
    default:
        alert("La opcion ingresada es distinto a 1,2 o 3");
        break;
}

