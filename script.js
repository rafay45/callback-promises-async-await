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
