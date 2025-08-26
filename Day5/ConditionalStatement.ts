// IF Conditional Statement
let Bage:number=20;
if(Bage>=18){
    console.log(`${Bage} Eligible for Voting`);
}

// IF-ELSE Conditional Statement

let Vage:number=16;
if(Vage>=18){    
    console.log(`${Vage} Eligible for Voting`);
}
else{
    console.log(`${Vage} Not Eligible for Voting`);
}

//Nested IF-ELSE Conditional Statement
let Page:number=65;     

if(Page>=85){
    console.log(`${Page} - Grade A`);
}
else if(Page>=65){
    console.log(`${Page} - Grade B`);
}
else if(Page>=50){
    console.log(`${Page} - Grade C`);
}
else if(Page>=35){
    console.log(`${Page} - Grade D`);
}
else{
    console.log(`${Page} - Grade F`);
}

//Switch Case Statement
let day:number=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
        break;    
}