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
//fibonacci(20);

/*Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. 
Si el array es muy pequeño, devuelve null.*/

function penultimo(arr){

    if (arr.length <= 1){

        return null; 
    }
    else {

        return (arr[arr.length-2]);
    }

}
//console.log(penultimo([42,true,4,'Liam',7]));
//console.log(penultimo([1]));

/*Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 4. 
    Si el array es muy pequeño, devuelve null.*/

function nultimo(arr,x){

        if (arr.length < x){
    
            return null; 
        }
        else {
    
            return (arr[arr.length-x]);
        }
    
}
//console.log(nultimo([42,true,4,'Liam',7],3));
//console.log(nultimo([1,2,4],3));
//console.log(nultimo([5,2,3,6,4,9,7],5));

/*Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. 
Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.*/

function secondlarger(arr){

    if (arr.length <= 1){

        return null;

    }else{

        var max = arr[0];
        for (var i = 0; i < arr.length; i++){

            if(arr[i] > max){

                max = arr[i];

            }

        }
        var sec_max = [0];
        for (var i = 0; i < arr.length; i++){

            if (arr[i] != max){

                if (arr[i] > sec_max){

                    sec_max = arr[i];

                }
            }
        }
    }

return sec_max; 

}
//console.log(secondlarger([42,1,4,32,3.14,7,30]));

/*Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos 
en una posición par, y manteniendo el orden original. 
Convierte [4, "Ulysses", 42, false] a [4,4, "Ulysses", 42, 42, false].*/

function doubletrouble (arr){

    var newarr = [];
    for (var i = 0; i < arr.length; i++){
        
        if (i % 2 == 0){

            newarr.push(arr[i]);
            newarr.push(arr[i]);

        }
        else {

            newarr.push(arr[i]);

        }
    }
return newarr;
}
//console.log(doubletrouble([4, "Ulysses", 42, false]));

/*Crea una función Fib(n) que devuelve el enésimo número Fibonacci. Usa recursión para esto.*/

function fib (x){

    if (x == 0 || x == 1){

        return x;

    }
    else {

       return fib(x-2) + fib(x-1);
    }

}
console.log(fib(7));
