const paintService = function (project, color) {
    console.log("The " + project + " has been painted " + color + ".")
};

var chooseProject = "north wall";
var chooseColor = "orange";

paintService(chooseProject, chooseColor);

var chooseProject = "south-east wall";
var chooseColor = "grey";

paintService(chooseProject, chooseColor);

//6. Yes, you will get a sentence like:
//7. "The grey has been painted south-east wall." 

var chooseColor = "grey";
var chooseProject = "south-east wall";


paintService(chooseColor, chooseProject);

//8. The same bad sentence.