// Task: with `input = “john,doe,30,developer”;
// 1. `split` to array
// 2. Capitalize first (name)
// 3. Sentence. “[Name] is a developer”
// Break it: Split -> Capitalize -> Build string.

const input = 'john,doe,30,developer';

const parts = input.split(',');
console.log(parts);

const capitalized = parts[0][0].toUpperCase() + parts[0].slice(1);
console.log(capitalized);

let sentence = `${capitalized} is a ${parts[3]}`;
console.log(sentence);


// Task: “Student Manager” - Create a `Student` class with `name`, `grade` and `getDetails` method.
// Build a function called processStudents(students): Filter>80, return uppercase name.
// Test it with an array of objects created from Student class
// Hint: function: filter and map methods

class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}

function processStudents(students) {
    return students
        .filter(student => student.grade > 80)
        .map(student => student.name.toUpperCase());
}

let students = [
    new Student('Alice', 90),
    new Student('Harry', 85),
    new Student('David', 79),
    new Student('Jacob', 69)
];

console.log(processStudents(students));