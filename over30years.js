// Array of objects
let objArr = [
    {
        name: 'john',
        age: 22,
        gender: 'male',
        email: 'jane@inz.org'
    },
    {
        name: 'jane',
        age: 35,
        gender: 'female',
        email: 'jane@inz.org'
    },
    {
        name: 'julie',
        age: 40,
        gender: 'male',
        email: 'julie11@inz.org'
    },
    {
        name: 'morlin',
        age: 29,
        gender: 'male',
        email: 'morlin22@inz.org'
    }
];

let above30Array=[];

for (let i = 0; i < objArr.length; i++) {  
    if ((objArr[i].age > 30)) {
        above30Array.push(objArr[i]);  
    }   
}

  console.log(above30Array)