function assignGrade(grade) {
    if (grade > 90) {
        return 'A';
    } else if (grade > 80) {
        return 'B';
    } else if (grade > 70) {
        return 'C';
    } else if (grade > 65) {
        return 'D';
    } else if (grade == 60) {
        return 'F';
    }
    else {
        return 'E';
    }
}

for (grade = 60; grade <= 100; grade++) {
    console.log("Voor " + grade + " punten, krijg je een " + assignGrade(grade) + ".");
}