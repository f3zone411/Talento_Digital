/*EJ 1*/

function a(){
    return 35;
}
console.log(a())

/* MI SALIDA --> 35  --- SALIDA DEL EJERCICIO ---> 35*/

/*EJ 2*/

function a(){
    return 4;
}
console.log(a()+a());

/*MI SALIDA ---> 8 ---- SALIDA DEL EJERCICIO ---> 8*/

/*EJ 3*/ 

function a(b){
    return b;
}
console.log(a(2)+a(4));

/*MI SALIDA ---> 6 ----- SALIDA DEL EJERCICIO ----> 6*/

/*EJ 4*/

function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));

/*MI SALIDA ---> 3,9 ----- SALIDA DEL EJERCICIO ----> 3,9*/

/*EJ 5*/

function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));

 /*MI SALIDA ----> 40 ---- SALIDA DEL EJERCICIO ----> 40*/

 /*EJ 6*/ 
 function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

/*MI SALIDA ----> 4 ---- SALIDA DEL EJERCICIO ----> 4*/

/*EJ 7*/

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

/*MI SALIDA ----> 10,3, 30 ------ SALIDA DEL EJERCICIO -----> 10, 3, 3O*/

/*EJ 8*/ 

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

/*MI SALIDA ----> 3,4 ------ SALIDA DEL EJERCICIO ----> 3,4*/

/*EJ 9*/
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

/*MI SALIDA ----> 2,5,8,11 ----- SALIDA DEL EJERCICIO ----> 2,5,8,11*/

/*EJ 10*/

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

/*MI SALIDA -------> 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0 ----- SALIDA DEL EJERCICIO ---> 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0*/

/*EJ 11*/

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

/*MI SALIDA ----> VACIO ----- SALIDA DEL EJERCICIO ---> VACIO NO HAY LLAMADA*/

/*EJ 12*/

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

/*MI SALIDA ----> VACIO ----- SALIDA DEL EJERCICIO ---> VACIO NO HAY LLAMADA*/


/*EJ 13*/
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

/*MI SALIDA ----> 10 ------ SALIDA DEL EJERCICIO ---> 10 */

/*EJ 14*/

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

/*MI SALIDA ----> 15,10 ------ SALIDA DEL EJERCICIO ----> 15,10 */

/*EJ 15*/ 
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

/*MI SALIDA ----> 15,15 ------ SALIDA DEL EJERCICIO ----> 15,15*/


/*TOTAL SALIDAS BUENAS 15 / 15*/



