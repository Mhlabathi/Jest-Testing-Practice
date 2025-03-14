
function capitalize( string ) {
    const capital = string.charAt(0).toUpperCase();
    const leters = string.slice(1);
    return capital + leters;
}

function reverseString( string ) {
    return string.split('').reverse().join('');
}

const calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        return a / b;
    }
}

function getCiphered( alpha, key ) {
    let ciphered = '';
    let timer = 0;
    for( let i = key; i < alpha.length + key; i++ ) {
        timer = i % 26;
        ciphered += alpha[timer];
    }
    console.log(ciphered);
    return ciphered;
}

function caesarCipher( string, num ) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const cipherCode = getCiphered(alpha, num);
    let ciphered = '';

    for ( let i = 0; i < string.length; i++ ) {
        let char = string[i];
        let index = alpha.indexOf(char.toLowerCase());
        //check punctuations
        if( !alpha.includes(char.toLowerCase()) ) {
            console.log('Im in Punct');
            ciphered += char;
        } else {
            if( char === char.toUpperCase() ) {
                console.log('Im in Upper');
                console.log(cipherCode[index].toUpperCase());
                ciphered += cipherCode[index].toUpperCase();
            } else {
                console.log('Im in lower');
                ciphered += cipherCode[index];
            }
        }
    }

    return ciphered;


}

console.log(caesarCipher( 'xyz', 3) );
// console.log(getCiphered('abcdefghijklmnopqrstuvwxyz', 3));
// capitalize('amazing');
// reverseString('amazing');
// calculator.add(4,2);
// calculator.subtract(4,2);
// calculator.multiply(4,2);
// calculator.divide(4,2);

module.exports = { capitalize, reverseString, calculator, caesarCipher }