
export function max (a: number, b: number, c: number) {
    let numbers = [a, b, c];
    let maxNumber = numbers[0];

    for ( let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= maxNumber){
            maxNumber = numbers[i];
        }
    }

    return maxNumber;
}


function max2 (a: number, b: number, c: number) {
    if ( a > b ){
        return ( a > c ) ? a : c;  
    }

    if ( b > c ){
        return b;
    }

    return ( a > c ) ? a : c; 
}


let maxValue = max( 5, 2, 6 );
console.log( maxValue ); //6
