const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];




function titleCased (){
  return tutorials.map((tutorial) => {
    element[0].toUpperCase() + element.slice(1)
  })
}
console.log(titleCased(tutorials))
// let newArray = titleCased(tutorials)
// console.log(newArray)
// console.log(titleCased(tutorials))
// let titleCased = (tutorial)=> {
//   return tutorial[0].toUpperCase() + tutorial.slice(1)
// }

// const titleCased = () => {
//   // use the .map method on the tutorials to return a new array
//   return tutorials;
// };

// const students = ["harry", "ron", "hermione", "ginevra"];
// let rollCall = [];

// for (const student of students) {
//   rollCall.push(student + " the wizard");
// }
// // console.log(rollCall)
// let studentRollCall = (student) => {
//   return student + " the wizard";
// };
// //* here we pass function as an argument (callback function)
// //* itterator map is calling passed function for every itteration
// //*
// //! rollCall = students.map(studentRollCall)

// //* map with function expression
// //* passing noname function sa an argument in map()
// //! rollCall = students.map(function(student) {
// //!  return student+" the wizard"
// //! })

// //* map() with arrow function

// rollCall = students.map((student) => student + " the wizard");
// console.log(rollCall);

// const robots = [
//   { name: "Johnny 5", modes: 5, isActivated: false },
//   { name: "C3PO", modes: 3, isActivated: false },
//   { name: "Sonny", modes: 2.5, isActivated: false },
//   { name: "Baymax", modes: 1.5, isActivated: false },
// ];

// const activateRobots = robots.map((robot) => {
//   return Object.assign({}, robot, {
//     modes: robot.modes * 2,
//     isActivated: true,
//   });
// });

// console.log(activateRobots, robots);

