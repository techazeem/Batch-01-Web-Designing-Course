console.log("hello javascript!");


// ============= loops in javascript=============

// console.log("Pakistan");
// console.log("Pakistan");
// console.log("Pakistan");
// console.log("Pakistan");
// console.log("Pakistan");


// ========= for loop

// 1. initialization / variable create karo. / starting value.
// 2. condition / ending value.
// 3. updation.

// let table = 7;
// for( let count = 1 ; count <= 20 ; count++ ){
    
//     console.log(`${table} * ${count} = ${ count * table} `);
    
// };

//  ===== while loop
// let count =6;

// while(count <= 5){

//     console.log(" i love pakistan");
    
//     count++;
// }

// ===== Do while loop.
// let a = 7; // 6
// do{
//     console.log("pakistan");

//     a++;    
// }while(a <= 5);


//   for-of loop.

// 1. string / "ali".
// 2. Array

// let str = "aliahmad";
// var count = 0;

// for(let text of str  ){
//     // console.log("pakistan");
//     console.log(text);
//     count++;

    
// }

// console.log(count);

// ======for-in loop

// string.
// object.

// const car = {
//     name : "crolla",
//     company : "honda",
//     company1 : "hoenda",
//     model : 2026,
// };

// for( let key in car ){
//     // console.log("pakistan");
//     console.log(key , car[key] += "A");
    
    
// };

//  practice 01

// for(let num = 0; num<=100 ; num+=2){

//         console.log(num);
   
    
// }

let gameNum = 12;

let userNum; 

do{ 
    userNum = prompt("Guess the Game Number:");

}while(gameNum != userNum);

if(gameNum == userNum){
    console.log("congratualation! you Guess the correct Number.");   
}





