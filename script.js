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
function getData(idOne, getMoreData) {
    setTimeout(() => {
        console.log("Data:", idOne);
        if(getMoreData){
            getMoreData()
        }
    }, 2000);
}
getData(1, () => {
    console.log("getting Data two...");
    getData(2, () => {
        console.log("getting Data Three...");
        getData(3, () => {
            console.log("getting Data four...");
            getData(4, () => {
                console.log("getting Data Five...");
                getData(5)
            })
        })
    })
})
