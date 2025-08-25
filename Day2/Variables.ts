//Variables in TypeScript
//syntax: var/let/const variableName:datatype = value
var message = "Welcome to TypeScript"
var age=30;
console.log(message)
console.log(age)

//var - can be re-declared and updated
//let - can be updated but cannot be re-declared
//const - cannot be updated and cannot be re-declared

//Scope - Accessible area of a variable (Functional scope and Block scope)

function varscope()
{
    if(true)
    {
        var fname="John" //functional scope
        let lname="Doe" //block scope
        const city="New York" //block scope
        console.log("Inside if block: "+fname)
        console.log("Inside if block: "+lname)
        console.log("Inside if block: "+city)
    }
    console.log("Outside if block: "+fname) //accessible
    //console.log("Outside if block: "+lname) //not accessible
    //console.log("Outside if block: "+city) //not accessible
}
varscope();

// 2)Declaration/value assignment in multiple lines
var x; //declaration
console.log(x) //undefined
x=10; //value assignment
console.log(x) //10

let xy; //declaration
console.log(xy) //undefined
xy=10; //value assignment
console.log(x) //10

const pi=3.14; //declaration and value assignment
console.log(pi) //3.14

//Redeclaration
var a="USA";
var a="INDIA"; //redeclaration
console.log(a) //INDIA

let b="USA";
//let b="INDIA"; //error: cannot be redeclared  

const c="USA";
//const c="INDIA"; //error: cannot be redeclared

//Re-initialization
var d="USA";            
d="INDIA"; //re-initialization
console.log(d) //INDIA

let e="USA";
e="INDIA"; //re-initialization  
console.log(e) //INDIA      

const f="USA";
//f="INDIA"; //error: cannot be re-initialized
console.log(f) //USA

//Hosting - var variables are hoisted to the top of the function and can be used before declaration
//console.log(car) //undefined    
var car="BMW"
console.log(car) //BMW

//console.log(bike) //error: cannot access before initialization
let bike="Ducati"   
console.log(bike) //Ducati

//console.log(bus) //error: cannot access before initialization
const bus="Volvo"
console.log(bus) //Volvo
//End of Day2/Variables.ts


