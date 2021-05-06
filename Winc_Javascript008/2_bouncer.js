function bouncerBrenda(age, visitorNum) {
    if (age < 18 && visitorNum > 250 || age < 18 && visitorNum <= 250) {
        return console.log("this club is for adults.");
    }
    else if (age >= 18 && visitorNum <= 250) {
        return console.log("Come in.");
    }
    else (age >= 18 && visitorNum > 250)
    return console.log("It's to busy now, come back later");
};

bouncerBrenda(18, 251);