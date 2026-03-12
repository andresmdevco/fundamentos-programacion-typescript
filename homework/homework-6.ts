

for ( let i = 1; i <= 5; i++ ) {

    let line = '';

    for( let j = 1; j <= 5; j++ ) {
        //line += ' ' + (j*i);
        line += ` ${j * i}`; // interpolación de strings
    }

    console.log( line );
}

