// mi solucion
// function largestNameOfArray( nameHeroes: string[] ) {

//     let numberHeroes = [];
//     let largestName = ''

//     for ( let i = 0; i < nameHeroes.length; i++ ) {
        
//         numberHeroes[i] = nameHeroes[i].length;

//         let maxNumberHeroes = numberHeroes[0]
//         for ( let i = 0; i < nameHeroes.length; i++ ) {
            
//             if ( numberHeroes[i] >= maxNumberHeroes) {
//                 maxNumberHeroes = numberHeroes[i];
//             }

//             if ( nameHeroes[i].length == maxNumberHeroes ){
//                 largestName = nameHeroes[i];
//             }
//         }
//     }

//     return largestName;    
// }

export function largestNameOfArray( nameHeroes: string[] ) {

    let largestName = '';

    for ( let i = 0; i < nameHeroes.length; i++ ) {
        
        let name = nameHeroes[i];

        if ( name.length > largestName.length ) {
            largestName = name;
        }
    }

    return largestName;    
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero = largestNameOfArray( heroes );
console.log( hero ); // Profesor Charles Xavier