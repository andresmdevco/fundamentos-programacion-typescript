// export let base = 10; obligatorio
// export let limit = 50; defecto 10


export function prinMultiplicationTable( base: number, limit: number = 10) {
    // if ( limit <= 0 ) {
    //     throw new Error('El límite debe ser mayor a cero')
    // } 

    if ( limit <= 0 ) {
        limit = 10;
    } 
    
    for ( let i = 1; i <= limit; i++ ) {
        let result = base * i;
        console.log ( base, 'x', i, '=', result);
    }
}