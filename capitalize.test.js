const { capitalize, reverseString, calculator, caesarCipher } = require('./capitalize.js');
// const  = require('./reverseString');

//capitalize
test('Capitalize first letter', () => {
    expect(capitalize("amazing")).toMatch('Amazing');
});

//reverseString
test('Reverses the string', () => {
    expect(reverseString("amazing")).toMatch('gnizama');
});

//calculator
test('Add two numbers', () => {
    expect(calculator.add(4,2)).toBe(6);
});

test('Subtracts two numbers', () => {
    expect(calculator.subtract(4,2)).toBe(2);
});

test('Multiplies two numbers', () => {
    expect(calculator.multiply(4,2)).toBe(8);
})

test('Divides two numbers', () => {
    expect(calculator.divide(4,2)).toBe(2);
})

//caesarCipher
test('ciphers string genrally', () => {
    expect(caesarCipher('abc', 3)).toMatch('def');
})

test('ciphers string wrapping a-z', () => {
    expect(caesarCipher('xyz', 3)).toMatch('abc');
})

test('ciphers string case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toMatch('KhOOr');
})

test('ciphers string punctuation retention', () => {
    expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!');
})