//Primer programa: que realice operaciones con dos numeros enteros y mayores a cero calculando suma, resta, multiplicacion, division y modulo.

//solicitamos dos numeros al usuario
    let num1 = prompt ("Ingresa un primer número"); 
    let num2 = prompt ("Ingresa un segundo número");      

//suma
function sumar() {
    let resultadoSuma;
    function suma(num1,num2){
        resultadoSuma= parseInt(num1)+ parseInt(num2);
        return(resultadoSuma)
    }
    alert("El resultado de la suma es "+(suma(num1,num2)));  
}

//resta
function restar() {
    let resultadoResta;
    function resta(num1, num2) {
        resultadoResta= num1-num2;
        return(resultadoResta);
    }  
    alert("El resultado de la resta es "+(resta(num1,num2)));     
}

//multiplicacion
function multiplicar() {
    let resultadoMulti;
    function multiplicacion(num1, num2) {
        resultadoMulti= num1*num2;
        return(resultadoMulti);
    }  
    alert("El resultado de la multiplicación es "+(multiplicacion(num1,num2)));  
}

//division
function dividir() {
    let resultadoDivision;
    function division(n1,n2) {
        if (num2 >0) {
            resultadoDivision= num1/num2;
    }else{alert("Vuelve a probar usando números mayores a cero")}
    return(resultadoDivision);
    }  
    alert("El resultado de la división es "+(division(num1,num2)));
}

//modulo
function modular() {
    let resultadoModulo;
    function modulo(n1,n2) {
        resultadoModulo=num1%num2;
        return(resultadoModulo);
    } 
    alert("El módulo de la división es " +(modulo(num1,num2)));   
}



//Segundo programa: que pida al usuario ingresar temperatura en grados celsius y transformar a kelvin y a fahrenheit.

let gradosCelsius = prompt("Ingresa la temperatura en grados Celsius")

function kelvin() {
//Conversión a grados Kelvin
const gradosKelvin = 273.15;
let resultadoKelvin;
    function conversionKelvin(gradosCelsius) {
        resultadoKelvin= Number(gradosCelsius)+ Number(gradosKelvin);
        return(resultadoKelvin);
    }
   alert("La equivalencia en grados Kelvin es " +(conversionKelvin(gradosCelsius))); 
}


function fahrenheit() {
//Conversión a grados Fahrenheit
    let resultadoFahrenheit;
function conversionFahrenheit(gradosCelsius) {
    resultadoFahrenheit= Number(gradosCelsius)* Number(1.8) + Number
    (32);
    return(resultadoFahrenheit); 
    }
    alert("La equivalencia en grados Fahrenheit es "+ (conversionFahrenheit(gradosCelsius)));
}

//Tercer programa: que pida al usuario una cantidad de días y muestre su equivalente en años, semanas y días.

function calcular() {
    const año = 365;
    const semana = 7;
    resultadoAño = 0;
    resultadoSemana = 0;
    resultadoDias = 0;
    
    let dias = prompt("Ingrese una cantidad de días mayor a 0");
    if (dias <= 0) {
        alert("Recuerde ingresar sólo números mayores a O")
    }else{prompt=("Ingrese una cantidad de días mayor a 0")}; 
    
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
    alert(`Los días ingresados corresponden a ${resultadoAño} año/años con ${resultadoSemana} semana/as y ${resultadoDias} día/s`);  
}

//Cuarto programa: pedir 5 números, sumarlos y calcular promedio.

//sumar números
function sumar5() {
    //solicitamos 5 numeros al usuario
let numero1 = prompt ("Ingresa un primer número"); 
let numero2 = prompt ("Ingresa un segundo número"); 
let numero3 = prompt ("Ingresa un tercer número"); 
let numero4 = prompt ("Ingresa un cuarto número");  
let numero5 = prompt ("Ingresa un quinto número"); 
    let resultadoSumar;
    function sumando(numero1,numero2, numero3, numero4, numero5){
        resultadoSumar= parseInt(numero1)+ parseInt(numero2) + parseInt(numero3) + parseInt(numero4) + parseInt(numero5);
        return(resultadoSumar)
    }
    alert("El resultado de la suma es "+(sumando(numero1,numero2,numero3,numero4,numero5))); 
    function promedio(numero1,numero2, numero3, numero4, numero5){
        resultadoSumar= parseInt(numero1)+ parseInt(numero2) + parseInt(numero3) + parseInt(numero4) + parseInt(numero5);
        return(parseInt(resultadoSumar/5));  
}
alert("El promedio es "+(promedio(numero1,numero2,numero3,numero4,numero5))); 
}

