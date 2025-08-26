let a:number = 10,b :number = 20;

//Arithmetic Operators
console.log("a + b = ",a+b); //30
console.log("a - b = ",a-b); //-10
console.log("a * b = ",a*b); //200
console.log("a / b = ",a/b); //0.5
console.log("a % b = ",a%b); //10   
console.log("a ** b = ",a**2); //100
console.log("++a = ",++a); //11
console.log("--b = ",--b); //19
console.log("a++ = ",a++); //11
console.log("b-- = ",b--); //19

//Assignment 
a=100;
b=200;
console.log("a += b = ",a+=b); //300
console.log("a -= b = ",a-=b); //100
console.log("a *= b = ",a*=b); //20000
console.log("a /= b = ",a/=b); //100
console.log("a %= b = ",a%=b); //100

//Relational Operators
a=10;   
b=20;
console.log("a > b = ",a>b); //false
console.log("a < b = ",a<b); //true
console.log("a >= b = ",a>=b); //false
console.log("a <= b = ",a<=b); //true
console.log("a == b = ",a==b); //false
console.log("a != b = ",a!=b); //true
console.log("a === b = ",a===b); //false
console.log("a !== b = ",a!==b); //true 

//Logical Operators
let x:boolean = true,y:boolean = false;
console.log("x && y = ",x&&y); //false
console.log("x || y = ",x||y); //true
console.log("!x = ",!x); //false
console.log("!y = ",!y); //true 
console.log("!(x && y) = ",!(x&&y)); //true
console.log("!(x || y) = ",!(x||y)); //false
console.log("x && (a < b) = ",x&&(a<b)); //true
console.log("y || (a > b) = ",y||(a>b)); //false
console.log("(a < b) && (a != b) = ",(a<b)&&(a!=b)); //true
console.log("(a > b) || (a == b) = ",(a>b)||(a==b)); //false
console.log("!(x || (a > b)) = ",!(x||(a>b))); //false
console.log("!(y && (a < b)) = ",!(y&&(a<b)));
//true
