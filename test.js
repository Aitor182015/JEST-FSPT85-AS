// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One euro should be 156.5 yen", function() {

    const yenes = fromDollarToYen(3.5);
    const expected = (3.5 / 1.07) * 156.5; 
    expect(fromDollarToYen(3.5)).toBe(expected); 
})

test("One euro should be 0.87GBP", function() {
    const pounds = fromYenToPound(3.5);
    const expected = (3.5 / 156.5) * 0.87; 
    expect(fromYenToPound(3.5)).toBe(expected); 
})
