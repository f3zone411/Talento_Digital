/*Configura un array para que los valores negativos se transformen en 0. 
Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].*/

function resetnegativos(arr){
  
    for(var i = 0; i < arr.length ; i++ ){
      
      if (arr[i] < 0){
        
        arr[i] = 0; 
        
      }
    }
  return arr;
  }
  
  a = resetnegativos([1,2,-1,-3]);
  console.log(a);

  /*Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor 
  y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].*/

  function moveradelante(arr){
  
    var temp = 0; 
    for(var i = 0; i < arr.length ; i++){
      
      if (i == arr.length - 1){
        
        arr[i] = 0; 
        
      }
      else{
        
        temp = arr[i + 1];
        arr[i] = temp;
        
      }
      
    }
  return arr;
  }
  
  a = moveradelante([1,2,-1,-3]);
  console.log(a);

  /*Configura un array para que el resultado sean los valores en el orden contrario. 
  Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].*/

  function returnreverse(arr){
  
    var acum = 0; 
    var rev = [];
    
    for(var i = arr.length - 1; i >=0 ; i--){
      
      rev[acum] = arr[i];
      acum = acum + 1;
      
    }
  return rev;
  }
  
  a = returnreverse([1,2,3,4,5]);
  console.log(a);

  /*Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). 
  Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) 
  debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].*/

  
  