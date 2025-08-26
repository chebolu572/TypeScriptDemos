//Premitive Data Types
//1. Number - Integer and Floating Point Numbers
let num1: number = 10;
let num2 = 20.5;
console.log(num1); // 10
console.log(num2); // 20.5

//2. String - Sequence of Characters
let str1: string = "Srinivas";
let str2 = 'Hello, TypeScript!';
let str3: string = `Welcome, ${str1}!`;
console.log(str1); // Srinivas
console.log(str2); // Hello, TypeScript!
console.log(str3); // Welcome, Srinivas!


// 3. Boolean - true or false
let isActive: boolean = true;
let isCompleted = false;
console.log(isActive); // true
console.log(isCompleted); // false

// 4. Null and Undefined
let n: null = null;
let u: undefined = undefined;
let num3: number | null = null; // Union type
let price:number
//console.log(price); // undefined
console.log(n); // null

// 5. Any - Can hold any type of value
let randomValue: any = 10;  
randomValue = "Hello";
randomValue = true;
console.log(randomValue); // true

//6.Union Types - A variable that can hold multiple types
let multiType: number | string;
multiType = 20;
multiType = "Twenty";
console.log(multiType); // Twenty   

//7. Void - Represents the absence of a value, typically used in functions that do not return a value
function logMessage(message: string): void {
    console.log(message);
}
logMessage("This is a log message."); // This is a log message.