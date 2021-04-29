//punt 1 en 2
const person =
{
    name: 'Martijn',
    age: 35,
    //punt 7
    evaluations: [7, 10, 9]
};

//punt 3
console.log(person);

//punt 4, 5 en 6
//Dot Notation
console.log(person.name);
console.log(person.age);

//Bracket Notation
console.log(person['name']);
console.log(person['age']);

//punt 8 Log alleen property
//console log in Dot Notation: van evaluations
console.log(person.evaluations);
//console log in Bracket Notation: van evaluations
console.log(person['evaluations']);

//punt 8: de waarde
console.log(person.evaluations.valueOf());