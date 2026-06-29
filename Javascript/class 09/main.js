console.log("class 09");


// ==========Array Methods 

// ===== Map()

// let arr = [20, 40 , 50 , 30 , 80];

// let cube = arr.map( (num , indx , array )=> {
//      console.log(num , indx , array);
     
// });

// console.log(cube);


//  Filter

// let number = [ 27 , 89 , 48 , 80 , 20 , 19 ];

// let even = number.filter( (a)=>{
//     return a%2 != 0;
// });

// console.log(even);
// console.log(number);

// Reduce.

// let count = [ 3, 8, 5, 2, 9 , 50 , 89];

// let result = count.reduce( (num1 , num2)=>{
//     return    num1 < num2 ? num1 : num2;
// })

// console.log(result);

// practice 01

// let stu = [30 , 80 , 95 , 99 , 29 , 97];

// let ninty = stu.filter( (num)=>{
//     return num>90;
// })

// console.log(ninty);

let userNum = prompt("Enter the number for Creating the Array:");

let uArray = [];

for(let i = 0 ; i<userNum ; i++){
    uArray[i] = i+1;
}
console.log(uArray);
// let sum = uArray.reduce( (num1, num2)=>{
//     return num1 % num2;
// })
// console.log(sum);






