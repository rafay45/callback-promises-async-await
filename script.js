// // Example of Synchronous
// let a = prompt("What's your name?")
// let b = prompt("What's your age?")
// let c = prompt("What's your father name?")
// console.log(a , b , c);

// Example of asynchronous
// console.log("start");
// setTimeout(() => {
//     console.log("asynchronous");
// }, 3000);
// console.log("End");


// "callback based style of asynchronous programming"

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function mySecond() {
//     myDisplayer("Goodbye");
// }

// function myFirst() {
//     myDisplayer("Hello");
// }

// mySecond();
// myFirst();

// const morning =  (a, b) => {
//       console.log(a + b);
// }

// const evening =  (a , b , morningCallback) => {
//       morningCallback(a , b)
// }
// evening(1 , 4 , morning)


// Callback Hell (Pramid Of Doom)

// function getData(idOne, getMoreData) {
//     setTimeout(() => {
//         console.log("Data:", idOne);
//         if(getMoreData){
//             getMoreData()
//         }
//     }, 2000);
// }
// getData(1, () => {
//     console.log("getting Data two...");
//     getData(2, () => {
//         console.log("getting Data Three...");
//         getData(3, () => {
//             console.log("getting Data four...");
//             getData(4, () => {
//                 console.log("getting Data Five...");
//                 getData(5)
//             })
//         })
//     })
// })

// Promises 
// First approach

// function functionOne() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("dataOne");
//             resolve("sucess");
//         }, 2000);
//     })
// }
// function functionTwo() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("dataTwo");
//             resolve("sucess");
//         }, 2000);
//     })
// }
// function functionThree() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("dataThree");
//             resolve("sucess");
//         }, 2000);
//     })
// }
// console.log("fetching dataOne...");
// let promiseOne = functionOne();
// promiseOne.then((res) => {
//     console.log(res);
//     console.log("fetching dataTwo...");
//     let promiseTwo = functionTwo();
//     promiseTwo.then(() => {
//         console.log(res);
//         console.log("fetching dataThree...");
//         let promiseThree = functionThree();
//         promiseThree.then(() => {
//             console.log(res);

//         })
//     })
// })

// Second Approach

// function functionOne(getDataOne) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("dataOne", getDataOne);
//             resolve("sucess");
//         }, 2000);
//     })
// }
// function functionTwo(getDataTwo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("dataTwo", getDataTwo);
//             resolve("sucess");
//         }, 2000);
//     })
// }
// function functionThree(getDataThree) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("dataThree", getDataThree);
//             resolve("sucess");
//         }, 2000);
//     })
// }

// Promise Chain 
// Third Approach

// console.log("fetching dataOne...");
// functionOne(1).then((res) => {
//     console.log(res);
//     console.log("fetching dataTwo...");
//     functionTwo(2).then((res) => {
//         console.log(res);
//         console.log("fetching dataThree...");
//         functionThree(3).then((res) => {
//             console.log(res);
//         })
//     })
// })

// Fourth Approach 

// function functionGetData(getData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", getData);
//             resolve("sucess");
//         }, 2000);
//     })
// }

// console.log("fetching dataOne...");
// functionGetData(1).then(() => {
//     console.log("fetching dataTwo...");
//     return functionGetData(2)
// }).then(() => {
//     console.log("fetching dataThree...");
//     return functionGetData(3)
// }).then((res) => {
//     console.log(res);
// })

// Async Await

// function allDatta(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", data);
//             resolve("sucess")
//         }, 3000);
//     })
// }

// async function asyncFunction(res) {
//     console.log("fetching Data one...");
//     await allDatta(1)
//     console.log("fetching Data Two...");
//     await allDatta(2)
//     console.log("fetching Data Three...");
//     await allDatta(3)
//     console.log("fetching Data Four...");
//     await allDatta(4)
//     console.log("fetching Data Five...");
//     await allDatta(5)
//     console.log(res);
// }
// asyncFunction("sucess")

// async function example() {
//   console.log("1");
//   await new Promise(resolve => setTimeout(resolve, 5000)); // 2 sec ka wait
//   console.log("2");
// }
// example();

// const promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("PROMISED 1 RESOLVED !!")
//     }, 6000)
// })

// const promise1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("PROMISED 2 RESOLVED !!")
//     }, 3000)
// })


// async function getData() {
//     // promise.then((response)=> console.log(response))
//     const p1 = await promise
//     console.log(p1)

//     const p2 = await promise1
//     console.log(p2)

//     console.log("Hello World !");
// }


//PROMISED 2 Resolved
//PROMISED 1 Resolved
//Hello World !



//PROMISED 1 Resolved
//PROMISED 2 Resolved
//Hello World !

// getData()


// Question:01 AWAIT kabhi bhi wait nh krta?
// Basically "await" waits for the promise to resolve
//  before moving to the next line of code.

// Question:02 Timer apas mei sum hokar kese chal rha hai?
// Although the timers start at the same time the next line of code
//  won't run until the first awaited promise is resolved or rejected.

// Question:03 Agar 2nd promise pehle resolve hogaya to first wale
//  promise se pehle run q nh hoa ?
// Because the first promise waits to be resolved or rejected
//  the second promise is executed afterward.


