/*Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el 
string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].*/

function big (arr){

    for(var i = 0; i < arr.length; i++){

        if (arr[i] > 0){
            arr[i] = 'big';
        }
    
    }
return arr;
}
//console.log(big([-1,3,5,-5]));

/*Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. 
La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor.*/

function maxmin(arr){

    var max = arr[0];
    var min = arr[0];

    for (var i = 0; i < arr.length; i++){
        if (arr[i] < min){

            min = arr[i];

        }
        else if (arr[i] > max){

            max = arr[i];

        }

    }
console.log(min)

return max;
}
//console.log(maxmin([1,5,10,-2]));

/*Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.*/

function impeven (arr){

    var imp = 0; 

        for (var i = 0; i < arr.length; i++){
            if (arr[i] % 2 != 0){
                imp = arr[i];
                console.log(arr[arr.length-2]);
                return imp;
            }
        }
}
//console.log(impeven([4,30,31,-1,8,9]));

/*Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original.*/

function doublevision(arr){

    var newarr = [];

    for( var i = 0; i < arr.length; i++){

        newarr.push(arr[i]*2);
    }
return newarr;

}
//console.log(doublevision([1,2,3,4]));

/*Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor 
con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) 
cambia el array original y devuelve [-1,1,1,3].*/

function countpos (arr){

    var count = 0;

    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            count = count + 1; 
        }
    }
arr[arr.length-1] = count;
return arr;
}
//console.log(countpos([-1,2,4,-3,6,7,-3,3]));

/*Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares 
seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) 
“¡Es para bien!”.*/

function oddandeven (arr){

    var counti = 0;
    var countp = 0;

        for (var i = 0; i < arr.length; i++){
            if (arr[i] % 2 != 0){
               counti = counti + 1;
               if (counti == 3){
                 console.log('¡Es para bien!');
                 counti = 0;
               }       
            }
            else if (arr[i] % 2 == 0){
                countp = countp + 1;
                if (countp == 3){
                  console.log('¡Que imparcial!');
                  countp = 0;
                }       
             }
        }
}
//oddandeven([-1,2,4,6,7,-3,3,0,4,8,12]);

/*Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, 
específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). 
Luego, console.log cada valor del array y devuelve arr.*/

function incrementimp(arr){
    for (var i = 0; i < arr.length; i++){
        if (i % 2 != 0){
            console.log(arr[i]);
            arr[i] = arr[i] + 1;
        }
        else {
            console.log(arr[i]); 
        }
    }
return arr;
}
//console.log(incrementimp([-1,2,4,6,7,-3,3,0,4,8,12]));

/*Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) 
que contiene strings, reemplaza cada string con un número de acuerdo cantidad de 
letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) 
debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?*/

function longprev (arr){

    var acum = 0;
    for (var i = arr.length-1; i>=0; i--){

        if (i != 0){
        acum = arr[i-1].length;
        arr[i] = acum;
        }
    }
return arr;
}
//console.log(longprev(['programar','dojo', 'genial']));

/*Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores 
del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) 
debería devolver [8,9,10] en un nuevo array.*/

function addseven(arr){

    var newarr = [];

    for (var i = 0; i < arr.length; i++){

        newarr.push(arr[i]+7);
    }

    return newarr;

}
//console.log(addseven([1,2,3]));

/*Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).*/

function invert (arr){

//console.log('Array Original: '+arr);

    for (var i = 0; i < arr.length/2; i++){

        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;

    }

return arr;
}

//console.log('Array Invertido: '+invert([3,1,6,4,2,27]));

/*Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del 
array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].*/

function negativeperspective(arr){

    for (var i = 0; i < arr.length; i++){

        if (arr[i] > 0){

            arr[i] = arr[i] * (-1);

        }
    }

return arr;
}
//console.log(negativeperspective([1,-3,5,-4,0]));

/*Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” 
cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime 
“tengo hambre” una vez.*/

function alwayshungry(arr){

    var count = 0;

    for (var i = 0; i < arr.length; i++){

        if(arr[i] == 'comida'){

            console.log('Yummy');
            count = count + 1;

        }
    }
    if (count == 0){

        console.log('Tengo Hambre');

    }
}
//alwayshungry(['comida','hola',0,1,'comida']);
//alwayshungry([0,0,1,12]);

/*Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc.
Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”,2, true].*/

function cambios(arr){

    for (var i = 0; i < arr.length/2; i+=2){

        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;

    }
return arr;
}
console.log(cambios([true,42,'Ada',2,'algoritmos','pizza',false]));


/*Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por 
el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].*/

function multiplicaelarray(arr,x){

    //console.log('El array sin multiplicar es: '+arr);
    for (var i = 0; i < arr.length; i++){

        arr[i] = arr[i] * x;

    }

    //console.log('El array multiplicado por '+ x +' es:');
return arr;
}
//console.log(multiplicaelarray([3,4,-6,-8,0],3));



