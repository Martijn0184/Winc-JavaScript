const isAdult = function (age) {
    if (age >= 18) {
        return console.log("true");
    } else return console.log("false");
};

const greetPerson = function (age) {
    const result = isAdult(age);
    if (age >= 18) {
        return ("Hello there");
    } else return ("Hey kiddo");
};


console.log(greetPerson(18));