/*Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.*/

function twofivefive(x){
  
    var arr = [];
    
    for(var i = 1; i<= x; i++){
      
      arr.push(i);
      
    }
return arr;
}
console.log(twofivefive(255));

/*Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares 
  del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.*/

function pares (x){

    var sum = 0;

    for (var i = 1; i<=x; i++){

        if(i % 2 == 0){
            sum = sum + i;
        }
    }
return sum;
}
console.log(pares(1000));

/*Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares 
entre 1 y 5000 (ej: 1+3+5+...+4997+4999).*/

function sumatoria(x){

    var sum = 0; 

    for (var i = 0; i <= x; i++){

        if (i % 2 != 0){
            sum = sum + i;
        }
    }
return sum;
}
console.log(sumatoria(5000));

/*Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array 
(ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).*/

function sumarray(arr){

    var sum = 0; 

    for (var i = 0; i < arr.length; i++){

        sum = sum + arr[i];
    }

return sum; 
}

console.log(sumarray([-5,2,5,12]));

/*Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función 
que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). */

function maxvalor(arr){

    var max = arr[0];

    for(var i = 0; i < arr.length; i++){

        if (arr[i] > max){

            max = arr[i];

        }
    }
return max;
}
console.log(maxvalor([-3,3,7,5]));

/*Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva 
el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).*/

function avg (arr){

    var sum = 0;
        for (var i = 0; i < arr.length; i++){
            sum = sum + arr[i];
        }
    return sum / arr.length;
    }
console.log(avg([1,3,5,7,20]));

/*Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50
 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.*/

 function impares (x){

    var arrimp = [];
   
        for (var i = 1; i <= x; i++){
          if(i % 2 != 0){  
          
            arrimp.push(i);
          
          }
          
        }
    return arrimp;
    }
    console.log(impares(50));

/*Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y.
Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 
(hay 2 números en el array mayores que 3, esto son 5 y 7). */

function mayorque (arr, y){

    var cant = 0;

    for (var i = 0; i < arr.length; i++){

        if(arr[i] > y){
            cant = cant + 1;
        }

    }
return cant;
}
console.log(mayorque([1,3,5,7],3));

/*Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada 
valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).*/

function cuadrados(arr){

    var sqr=0;

    for (var i = 0; i < arr.length; i++){

        sqr = arr[i] * arr[i];
        arr[i] = sqr;

    }

return arr;
}
console.log(cuadrados([1,5,10,-2]));

/*Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número 
negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números 
negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).*/

function negatives (arr){

    for (var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
return arr;
}
console.log(negatives([1,5,10,-2]));

/*Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array 
que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original 
(ej: [1,5,10,-2] devolverá [10,-2,3.5]).*/

function maxminavg(arr){
    var newarr = [];
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    var avg = 0;

    for (var i = 0; i < arr.length; i++){
        if (arr[i] < min){

            min = arr[i];

        }
        else if (arr[i] > max){

            max = arr[i];

        }

    sum = sum + arr[i];
    }
avg = sum / arr.length;
newarr.push(max);
newarr.push(min);
newarr.push(avg);

return newarr;
}
console.log(maxminavg([1,5,10,-2]));

/*Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. 
La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).*/

function swap (arr)

    var temp = arr[0];
    arr[0] = arr [arr.length];
    arr[arr.length] = temp;

}
console.log([1,5,10,-2]);

/*De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo 
por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].*/

function numbertostring (arr){

    for (var i = 0; i < arr.length; i++ ){

        if (arr[i] < 0){

            arr[i] = 'Dojo';
        }
    }
return arr;
}
console.log(numbertostring([-1,-3,2]));



 