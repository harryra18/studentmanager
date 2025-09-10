const student = {
    name: "Harry",
    grade: 90,
    greet: function () {
        return `Hi, I'm ${this.name}!`
    }
}
console.log(student.name)
console.log(student.greet())
student.age = 20;
console.log(student)


//Different Function Types

// Function Declaration - Can console before the function
console.log(add(2, 3))
function add(a, b) {
    return a + b;
}


// Function Expression
const multiply = function (x, y) {
    return x * y
}


// Arrow Function
const divide = (x, y) => x / y;

console.log(multiply(2, 4))
console.log(divide(10, 2))



/*
Task: Create an object person with properties name, age, and a method introduce that returns 
“I’m [name], and I’m [age] years old.” 
Write a function incrementAge(person) that increases age by 1 and returns the new age. 
Test it
*/

// Object with name, age, and introduce method.
// We also need a function that increments the person's age by 1
// Test with Logs. Inputs: initially, none
// Outputs: strings and numbers

// Step 1 Create our object
// create a person object: name = Kendra, age = 19, introduce = function returning I'm name + and
// I'm age + years old


const person = {
    name: 'Kendra',
    age: 19,
    introduce: function () {
        this.age += 1; //<-- that will show incremented age on the person.introduce
        return `I'm ${this.name}, and I'm ${this.age} years old.`
    }
}

// Step 2: Function to modify our age number and increment by 1
// function called incrementAge: take a person (object), add 1 to the value of age,
// return the new age

// function incrementAge(person){
//     person.age += 1;
//     return person.age
// }

// Test
console.log(person.introduce())
//incrementAge(person)
console.log(person.age)


// Class and Constructor (Template)
// study() and improvdeGrade() is a method
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying and has a grade of ${this.grade}.`
    }
    improveGrade(points) {
        this.grade += points;
        return this.grade;
    }
}

const bob = new Student('Bob', 85)
console.log(bob)
console.log(bob.study())
console.log(bob.improveGrade(5))



/*
Task: Create a Car class with properties make, model, speed (via constructor). 
Method accelerate(speedIncrease): Increase speed, return “[make] [model] is now going [speed] mph.” 
Test with instance and call.
*/


class car {
    constructor(make, model, speed) {
        this.make = make;
        this.model = model;
        this.speed = speed;
    }
    accelerate(speedIncrease) {
        this.speed += speedIncrease;
        return `${this.make} ${this.model} is now going ${this.speed} mph.`
    }
}
const myCar = new car('BMW', 'X5', 80)
console.log(myCar)
console.log(myCar.accelerate(20))




// Array Method Review

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.map(n => n * 2)); // [2,4,6,8,10]
console.log(numbers.filter(n => n % 2 === 0)); // This shows even numbers that can be divided by 2
console.log(numbers.reduce((sum, n) => sum + n, 0)) // adding all the numbers in array 
numbers.forEach(n => console.log(n)) // 1 2 3 4 5 but on separate lines
console.log(numbers.find(n => n > 3)) // 4 - shows number greater than 4

// Array of object

const students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 85 },
    { name: 'Charlie', grade: 95 }
];

// 1. mapp for names array
// 2. filter for grades > 88
// 3. reduce for average grade

const names = students.map(students => students.name);
console.log(names)

const topStudents = students.filter(students => students.grade > 88);
console.log(topStudents)

const average = students.reduce((sum, students) => sum + students.grade, 0) / students.length;
console.log(average)