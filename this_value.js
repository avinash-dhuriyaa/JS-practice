// // Global - Window
console.log(this)
// function - window
function win(){
    console.log(this)
}
win();

// // method - Object
// // function inside method (es5)- window
// // function inside method (es6)- object
// // constructor function  mein this is value - new blank object
// // Event listener mein this ki value - that element jispar event listener laga h 

