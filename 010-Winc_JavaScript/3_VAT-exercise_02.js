const vatAmount = function (vatType, salesPrice) {
    console.log("Type of Value Added Tax is: " + vatType);
    console.log("The sales price is: " + salesPrice);
    if (vatType === "none") {
        return salesPrice * 0;
    } else if (vatType === "low") {
        return (salesPrice / 109) * 9;
    } else (vatType === "high")
    return (salesPrice / 121) * 21;
};

const basePrice = function (vatType, salesPrice) {
    const valueAddTax = vatAmount(vatType, salesPrice);
    console.log("The Value Added Tax is: " + valueAddTax);
    const basePrice = (salesPrice - valueAddTax);
    return ("The base price is: " + basePrice + "\n");
};

console.log(basePrice("none", 1000));
console.log(basePrice("low", 1090));
console.log(basePrice("high", 1210));