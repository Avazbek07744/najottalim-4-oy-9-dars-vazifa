//? forEach \\\

//! 1-misol \\\

// const num = [1, 2, 3, 4];
// let res = []

// num.forEach(function (v) {
//     res.push(v * 2)
// })

// console.log(res);

//! 2-misol \\\

// let str = ['apple', 'banana', 'cherry'];
// let res = []

// str.forEach(function(v){
//     res.push(v.toUpperCase())
// });

// console.log(res);

//! 3-misol \\\

// let num = [10, 20, 30, 40];
// let res = []

// num.forEach(function (v) {
//     res.push(v + 5)
// })

// console.log(res);

//! 4-misol \\\

// let students = [
//     { name: 'Ali', grade: 85 },
//     { name: 'Vali', grade: 92 },
//     { name: 'Hasan', grade: 78 }
// ];

// students.forEach(student => {
//     console.log(`${student.name}: ${student.grade}`);
// });


//? map \\\

//! 1-misol \\\

// let numbers = [1, 2, 3, 4];
// let res = numbers.map(function (v) {
//     return v * 2
// })
// console.log(res);

//! 2-misol \\\

// let str = ['apple', 'banana', 'cherry'];

// let res = str.map(function(v){
//     return v.toUpperCase()
// });

// console.log(res);

//! 3-misol \\\

// let num = [10, 20, 30, 40];
// let res = num.map(function (v) {
//     return v + 5
// })

// console.log(res);

//! 4-misol \\\

// let students = [
//     { name: 'Ali', grade: 85 },
//     { name: 'Vali', grade: 92 },
//     { name: 'Hasan', grade: 78 }
// ];

// const res = students.map(student => {
//     return {
//         name: student.name,
//         grade: student.grade + 10
//     };
// });

// console.log(res);


//? filter \\\

//! 1-misol \\\

// let num = [1, 2, 3, 4, 5, 6];
// let res = num.filter(function (v) {
//     return v % 2 == 0
// })

// console.log(res);

//! 2-misol \\\

// let mevalar = ['apple', 'banana', 'cherry', 'date'];

// let res = mevalar.filter(function (v) {
//     return v.length > 5
// })

// console.log(res);

//! 3-misol \\\

// let ages = [12, 17, 18, 19, 21];

// let res = ages.filter(function (v) {
//     return v > 18
// })

// console.log(res);

//! 4-misol \\\

// let students = [
//     { name: 'Ali', grade: 85 },
//     { name: 'Vali', grade: 72 },
//     { name: 'Hasan', grade: 90 },
//     { name: 'Olim', grade: 77 }
// ];

// let res = students.filter(student => student.grade > 80);

// console.log(res);

//? some/every

//! 1-misol \\\

// let num = [-1, -2, 3, -4];

// let res = num.some(function (v) {
//     return v > 0
// })

// console.log(res);

//! 2-misol \\\

// let animals = ['cat', 'dog', 'elephant'];

// let res = animals.some(function (v) {
//     return v.length > 5
// })

// console.log(res);

//! 3-misol \\\

// let num = [1, 2, 3, 4];

// let res = num.every(function (v) {
//     return v > 0
// })

// console.log(res);

//! 4-misol \\\

// let students = [
//     { name: 'Ali', grade: 60 },
//     { name: 'Vali', grade: 70 },
//     { name: 'Hasan', grade: 80 }
// ];

// let res = students.every(student => student.grade > 50);

// console.log(allAbove50);