import log, { Person } from './tools';
//Accessing object properties
let firstName = "Mirireoluwa";
let lastName = "Olukanni";
let gender = "male";
let height = 1.7;
let hobbies = ['Music', 'Movies'];
let birthday = new Date(2004,1,15);
let isAlive = true;

let person1 = new Person (firstName, lastName, gender, height, hobbies, birthday, isAlive)

log (`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()}`);