// Contenido de app.js 
// console.log("Hello World")

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// CALCULADORA DE DIVISAS

const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD
}

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;
    let yenes = euros * oneEuroIs.JPY;
    return yenes;
} 

function fromYenToPound(yenes) {
    let euros = yenes / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = {sum, fromEuroToDollar, fromYenToPound, fromDollarToYen}
