console.log('utils.js is runnning');

const square = (x) =>  x*x;
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;

//export { square, add, subtract as default }; 

// can have serveral named && a default or not
// can also have just a default if you have only 1 component in the file

export default subtract;