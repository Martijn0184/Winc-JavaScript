const totalAmount = 24;

if (totalAmount > 25 && totalAmount < 50) {
    console.log("Je krijgt gratis (vega) bitterballen!");
} else if (totalAmount > 50 && totalAmount < 100) {
    console.log("Je krijgt een gratis portie Nachos!");
} else if (totalAmount > 100) {
    console.log("Je krijgt een gratis fles champagne");
} else {
    console.log("helaas je komnt niet in aanmerking voor 1 van onze kortingsacties.")
}