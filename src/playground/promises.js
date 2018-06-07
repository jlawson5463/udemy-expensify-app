const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is my resolved data');
        //reject('something went wrong')
    }, 4500)
    
});
console.log('before');

promise.then((data) => {
    console.log('this is my 1st promise', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is my other promise')
        }, 5000);
    });
}).then((str) => {
    console.log('does this run?', str)
},(error) => {
    console.log('error', error)
}); // same as below method

console.log('after promise');


// promise.then((data) => {
//     console.log('this is in the then')
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })