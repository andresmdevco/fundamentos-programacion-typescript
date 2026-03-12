
// console.log('10 x 1 = 10');
// console.log( 10, 'x 2 =', 20);
// console.log( 10 + ' x 3 = ' + 30);
// console.log('10 x 4 = 40');

// for
// let base = 10;
// let limit = 50;

// for ( let i = 1; i <= limit; i++ ) {
//     let result = base * i;

//     console.log(base, 'x', i, '=', result);
// }

//while
// let base = 10;
// let limit = 50;
// let start =  1;

// while ( start <= limit ) {
//     let result = base * start;
//     console.log(base, 'x', start, '=', result);
    
//     start++;
// }

// do while
export let base = 10;
export let limit = 50;
let start =  1;

do {
    let result = base * start;
    console.log(base, 'x', start, '=', result);
    
    start++;

} while ( start <= limit );