/*Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos 
(incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).*/

function sigma(x){

    var suma = 0;

    for(var i = 0; i <= x; i++){

        suma = suma + i;

    }
console.log('El valor de sigma para ' + x + ' es: ');

return suma;
}

//console.log(sigma(5));
//console.log(sigma(6));

/*Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) 
de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); 
factorial(5) = 120 (1*2*3*4*5).*/

function factorial(x){

    var factorial = 1;

    for(var i = 1; i <= x; i++){

        factorial = factorial * i;

    }
console.log('El valor del factorial para ' + x + ' es: ');

return factorial;
}
//console.log(factorial(5));
//console.log(factorial(6));

/*Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, 
cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería 
aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden 
al valor cuatro más tarde, etc). 
    Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), 
    fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), 
    fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).*/

function fibonacci(x){

    var arr = [0,1];

        if (x == 0){

            var fib = arr[0];
            console.log('El valor de la sucesion para ' + x + ' es: '+fib);

        }else if (x == 1){

            var fib = arr[1];
            console.log('El valor de la sucesion para ' + x + ' es: '+fib);

        }else {

            for(var i = 2; i <= x; i++){

             arr.push(arr[arr.length-1] + arr[arr.length-2]);
        
            }
            var fib = arr[arr.length-1];
            console.log('El valor de la sucesion para ' + x + ' es: '+fib);

        }
}
fibonacci(20);