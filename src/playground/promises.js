const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('this is my resolved data');
        reject('something went wrong')
    }, 4500)
    
});
console.log('before');

promise.then((data) => {
    console.log('this is in the then')
    console.log(data)
},(error) => {
    console.log(error)
}); // same as below method

// promise.then((data) => {
//     console.log('this is in the then')
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })


console.log('after promise');