// //_________________________ module 21 ________________________/
// //21-1 What are function and function syntax;
// //              \___________ syntax ____________/

// // function handleButton (){
          //  //console.log("")
          //  //console.log("")
          //  //console.log("")
// //} 
// // call the function
// // handleButton()


// function kajkor (){
//       console.log("tui age khara")
//       console.log("tar por hata suru kor")
//       console.log("tar por fener switer kase ja")
//       console.log("tar por fan ta off kor")
//       console.log("ehon tor ja iccha kor ga")
// }
// // cal the function 
// kajkor()
// // \___________________________________________________________/




// //// //_________________________ module 21 ________________________/
//   // 21-3 Function parameter, handle multiple parameters

// function square (number) {
//       console.log("value of the number peramiter", number);
//       const borgoo = number * number;
//       console.log("squaer of the given number: ", borgoo);

// }

//  square(5);
//  console.log("--------------------------->")
//  square(225);
//  console.log("--------------------------->")
//  square(223)
//  console.log("--------------------------->")
//  square(2234)
//  console.log("--------------------------->")
//  square(12);
// //____________________________________/


//  function y (a , b) {
//       const total = a + b;
//       console.log(total)
//  }
// y(11, 22)
// //______________________________________________________________/.






// //// //____________________ module 21 ________________________/
//   // 21-4 How Function works and argument vs parameters
//  //           \____________ arguments _____________/

// function doubleIt (number) {
//       const doubled = number * 2;
//       console.log(doubled);
// }

// doubleIt(22)
// console.log("-------------------------")
// doubleIt(32)
// console.log("-------------------------")
// doubleIt(24)
// console.log("-------------------------")
// doubleIt(25)
// console.log("-------------------------")
// const number = 33;
// doubleIt(number);
// //_________________________________________/


// function x (num1, num2) {
//       const y = num1 - num2;
//       console.log(num1, num2, "diffarence", y);
// };

// const fatheAge = 22;
// const son = 11;

// x(fatheAge, son)
// //________________________________________________//




// //// //____________________ module 21 ________________________/
//   // 21-5 Function return and set return value to a variable
//  //           \____________ return _____________/
// function tenTimes (number) {
//       const result = number * 10;
//       return result;
// }
// const output = tenTimes(20);
// console.log(output)
// //_____________________________________________/



// //// //____________________ module 21 ________________________/
//   // 21-6 Recap and conditional return of odd and even
//  //           \____________ return _____________/
// function add (num1, num2) {
//       const result = num1 + num2;
//       return result
// };
// const total = add(10, 10);
// console.log(total)
// //____________________________________/

// function doAdd (num1, num2) {
//       const sum = num1 + num2;
//       const dif = num1 - num2;
//       const multiple = sum * dif;
//       const divide = multiple /2;
//       return divide;
// };
// const result = doAdd(10, 5);
// console.log(result)
// //__________________________________________/


// //__________ Odd _____________/
      // function odd (number) {
      //       if(number % 2 === 1){
      //             return true
      //       }else{
      //             return false
      //       }
      // };
      // const result = odd(3);
      // console.log(result)
      // const result2 = odd(6);
      // console.log(result2)
// //________________________________________/


// //____________ even _____________/
// function even (number) {
//       if(number % 2 === 0){
//             return true
//       }
//       return false; // //short way
// };
// const result_1 = even(3);
// console.log(result_1)
// const result_2 = even(6);
// console.log(result_2)
// //__________________________________________________________________________/


// //// //____________________ module 21 ________________________/
//   // 21-7 Different types of parameters for a function
//  //           \____________ type of peramiters _____________/

// function strLenght (str) {
//       const strSize = str.length;
//       console.log(str, strSize)
//       if(strSize % 2 === 0){
//             console.log("this is even number: ", strSize)
//       }else{
//             console.log("this is odd number: ", strSize)
//       }
// }
// strLenght("dhaka");
// console.log("--------------------")
// strLenght("ak");
// // \________________________________________________/


// function doubleOrTriple (number, doDouble) {
//       if(doDouble === true){
//             const result = number * 2;
//             return result
//       }else{
//             const result = number * 3;
//             return result
//       }
// };
// const total = doubleOrTriple(5, true);
// console.log(total)
// const total2 = doubleOrTriple(5, false);
// console.log(total2)
// //_________________________________________________/


// function arr (number) {
//       const len = number.length;
//       return len
// };
// console.log(arr([11, 22, 33, 44, 55, 66, 77, 88]))
// //__________________________________________________________________________/.



// //// //____________________ module 21 ________________________/
//   // 21-8 Sum of all numbers in an array using function.
//  //       \____________ type of peramiters ____________/

// function sumOfNumbers (numbers) {
//       let sum = 0;
//       for(let number of numbers){
//             console.log(number)
//             sum = sum + number
//       } 
//       return sum
// }

// const numbers = [2, 2, 5, 5, 6];
// const sum = sumOfNumbers(numbers);
// console.log("the sum of numbers: ", sum)
// //__________________________________________________/.


// //// //____________________ module 21 ________________________/
//   // 21-9 Return all the even numbers of an array.
//  //       \____________ even num only ____________/

// function evenNumbersOnly (number) {
//       const even = [];
//       for(let num of number){
//             console.log(num)
//             if(num % 2 === 0){
//                   even.push(num)
//             }
//       }
//       return even;
// };
// const number = [11, 32, 53, 12]
// const evens = evenNumbersOnly(number);
// console.log(evens);


// //___________ sum of even number ______________/

// let number = [11, 32, 53, 12, 54];
// function sumEvenNumbersOnly (number) {
//       let sum = 0;
//       for(let num of number){
//             if(num % 2 === 0){
//                   console.log(num)
//                   sum = sum + num;
//             }
//       }
//       return sum;
// };
// const sum = sumEvenNumbersOnly(number);
// console.log("sum of the even numbers: ", sum);

