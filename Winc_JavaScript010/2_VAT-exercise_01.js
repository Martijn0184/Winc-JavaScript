const vatAmount = function (vatType, basePrice) {
    console.log("Type of Value Added Tax is: " + vatType);
    console.log("The base price is: " + basePrice);
    if (vatType === "none") {
        return basePrice * 0;
    } else if (vatType === "low") {
        return basePrice * 0.09;
    } else (vatType === "high")
    return basePrice * 0.21;
};

const salesPrice = function (vatType, basePrice) {
    const valueAddTax = vatAmount(vatType, basePrice);
    console.log("The Value Added Tax is: " + valueAddTax);
    const priceInStore = (valueAddTax + basePrice);
    return ("The price in store is: " + priceInStore + "\n");
};

console.log(salesPrice("none", 1000));
console.log(salesPrice("low", 1000));
console.log(salesPrice("high", 1000));