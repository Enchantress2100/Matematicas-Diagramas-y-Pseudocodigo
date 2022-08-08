//Primer programa: que realice operaciones con dos numeros enteros y mayores a cero calculando suma, resta, multiplicacion, division y modulo.

//solicitamos dos numeros al usuario
    let num1 = prompt ("Ingresa un primer número"); 
    let num2 = prompt ("Ingresa un segundo número");      
//suma
function sumar() {
        let resultadoSuma = parseInt(num1) + parseInt(num2);
        document.getElementById('sumar').innerHTML=`El resultado de la suma es ${resultadoSuma}.` 
        return resultadoSuma
}
//resta
function restar() {
    let resultadoResta = parseInt(num1) - parseInt(num2);
    document.getElementById('restar').innerHTML=`El resultado de la resta es ${resultadoResta}.`
    return resultadoResta;
    }  
//multiplicacion
function multiplicar() {
    let resultadoMulti= parseInt(num1)* parseInt(num2);
    document.getElementById('multiplicar').innerHTML = `El resultado de la multiplicación es ${resultadoMulti}.`
    return resultadoMulti;
}  
//division
function dividir() {
    if (num2 >0) {
        let resultadoDivision = parseInt(num1) / parseInt(num2);
        document.getElementById('dividir').innerHTML=`El resultado de la división es ${resultadoDivision}`;
        return(resultadoDivision);
    } else {
        document.getElementById('dividir').innerHTML = `Volver a intentar con número divisor mayor a cero.`
    }
}  
//modulo
function modular() {
    let resultadoModulo= parseInt(num1) % parseInt(num2);
    document.getElementById('modulo').innerHTML=`El módulo entre ambos números es ${resultadoModulo}`
    return resultadoModulo;
} 
//Segundo programa: que pida al usuario ingresar temperatura en grados celsius y transformar a kelvin y a fahrenheit.
let boton = document.getElementById('boton')
boton.addEventListener('submit', gradosCelsius)
function gradosCelsius() {
   return document.getElementById('celsius').value
} 
function kelvin() {
//Conversión a grados Kelvin
const gradosKelvin = 273.15;
        let resultadoKelvin= Number(gradosCelsius())+ Number(gradosKelvin);
        document.getElementById('kelvin').innerHTML=`La equivalencia en grados Kelvin es ${resultadoKelvin}`; 
        return resultadoKelvin;
    }
function fahrenheit() {
//Conversión a grados Fahrenheit
    let resultadoFahrenheit= Number(gradosCelsius())* Number(1.8) + Number(32);
    document.getElementById('fahrenheit').innerHTML=`La equivalencia en grados Fahrenheit es ${resultadoFahrenheit} `;
    return(resultadoFahrenheit); 
    }
//Tercer programa: que pida al usuario una cantidad de días y muestre su equivalente en años, semanas y días.
function calcular() {
    const año = 365;
    const semana = 7;
    let resultadoAño= 0;
    let resultadoSemana=0;
    let resultadoDias=0;
    
    let dias = document.getElementById('dias').value

    if (dias <= 0) {
        document.getElementById('calculoDias').innerHTML="Recuerde ingresar sólo números mayores a O"
    } else {
    //Calcular años
    while (dias >= año) {
        dias= dias-año;
        resultadoAño++;
    }
    //Calcular semanas
    while (dias >= semana) {
       dias = dias - semana;
       resultadoSemana++; 
    }
    //Calcular días
    while (dias>=1){
        dias=dias -1;
        resultadoDias++
    }
    //imprimir información de acuerdo a los días, semanas, y años.
    document.getElementById('calculoDias').innerHTML=`Los días ingresados corresponden a ${resultadoAño} año/años con ${resultadoSemana} semana/as y ${resultadoDias} día/s`;  
    } 
}
//Cuarto programa: pedir 5 números, sumarlos y calcular promedio.
let botonSuma = document.getElementById('botonSuma')
botonSuma.addEventListener('submit', sumar5)

//sumar números
function sumar5() {
    let numero1=document.getElementById('numero1').value
    let numero2=document.getElementById('numero2').value
    let numero3=document.getElementById('numero3').value
    let numero4=document.getElementById('numero4').value
    let numero5=document.getElementById('numero5').value

    let resultadoSumar = parseInt(numero1) + parseInt(numero2) + parseInt(numero3) + parseInt(numero4) + parseInt(numero5);
    let promedio = parseInt(resultadoSumar / 5); 

    document.getElementById('resultado5Numeros').innerHTML = `El resultado de la suma de los 5 números es ${resultadoSumar}. El promedio es ${promedio} `

    return resultadoSumar, promedio
 }