const paintService = function (color) {
    console.log("The wall has been painted " + color + ".")
};

const chooseColor = "green";

paintService(chooseColor);
//paintService();

//7. If you don't pass in an argument the result is:
// "The wall has been painted undefined"