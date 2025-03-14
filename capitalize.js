
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
            ciphered += char;
        } else {
            if( char === char.toUpperCase() ) {
                ciphered += cipherCode[index].toUpperCase();
            } else {
                ciphered += cipherCode[index];
            }
        }
    }

    return ciphered;


}

function analyzeArray( arr ) {
    let av = 0;
    let min = arr[0];
    let max = 0;
    let length = arr.length;

    for ( let i = 0; i < length; i++ ) {
        if( min > arr[i] )
            min = arr[i];
        if ( max < arr[i] )
            max = arr[i];
        av += arr[i];
    }

    av = av / length;

    const obj = {
        avarage: av,
        min: min,
        max: max,
        length: length,
    }
    return obj;
}

console.log(analyzeArray([1,8,3,4,2,6]))
console.log(caesarCipher( 'xyz', 3) );
console.log(getCiphered('abcdefghijklmnopqrstuvwxyz', 3));
capitalize('amazing');
reverseString('amazing');
calculator.add(4,2);
calculator.subtract(4,2);
calculator.multiply(4,2);
calculator.divide(4,2);

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray }