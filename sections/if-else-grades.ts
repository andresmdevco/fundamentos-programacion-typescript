/*
Realizar un programa que muestre la nota 
del alumno como: A, B, C, D, F
donde;
A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/

// let grade = 94;

// let result = 'La nota del alumno es:';

// if ( grade >= 90 ) {
//     console.log(result,'A');
// } else if ( grade >= 80) {
//     console.log(result,'B');
// } else if ( grade >= 70) {
//     console.log(result,'C');
// } else if ( grade >= 60) {
//     console.log(result, 'D');
// } else {
//     console.log(result,'F');
// }

export let grade: number = 95;
let gradeLetter: string;

if ( grade >= 95 ) {
    gradeLetter = 'A+';   
} else if ( grade >= 90 ) {
    gradeLetter = 'A';   
} else if ( grade >= 80) {
    gradeLetter = 'B';  
} else if ( grade >= 70) {
    gradeLetter = 'C';  
} else if ( grade >= 60) {
    gradeLetter = 'D';  
} else {
    gradeLetter = 'F';  
}

console.log('La nota del alumno es:', gradeLetter);