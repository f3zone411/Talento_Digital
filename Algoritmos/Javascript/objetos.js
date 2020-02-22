var users = [

    {name: 'Michael', age:37}, 
    {name: 'John', age:30}, 
    {name: 'Carlos', age:17},
    {name: 'David', age:27},
    {name: 'Jose Luis', age:15},
    {name: 'Jose', age:25},

];

console.log('El nombre del primer objeto es: ' + users[0].name);

for (var user = 0; user < users.length; user++){
    
    if (users[user].name == 'John'){

        console.log('La edad de: ' + users[user].name + ' es:' + users[user].age);
    
    }

    console.log('Usuario: ' + user + ' Nombre: ' + users[user].name + ' -  Edad: ' + users[user].age);

}

console.log('---------------------Los mayores de edad son--------------------------');

for (var user = 0; user < users.length; user++){
    
    if (users[user].age >= 18){

        console.log('Usuario: ' + user + ' Nombre: ' + users[user].name + ' - Edad: ' + users[user].age);
    
    }

}
