const name = "Alice";
const age = 25;
const isStudent = true;

function greet(person) {
    return `Hello, ${person}!`;
}

const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => {
    console.log(`I like ${fruit}`);
});

const user = {
    name: "Bob",
    age: 30,
    email: "bob@example.com",
    getInfo() {
        return `${this.name} is ${this.age} years old`;
    }
};

console.log(greet(name));
console.log(user.getInfo());