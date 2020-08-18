//Varaibles
    var mikeFacts = [" has been around the world twice, but never been to Atlantic City", 
    "'s wife's grandmother was a computer programmer", 
    " claims he was the first Young Men's Christian Association Jewish Indian Chief",
    "'s grandmother was married to an Oppenheimer (as in J. Robert Oppenheimer)",
    " can spin his tongue 360 degrees"];

    var woodsFacts = [" is colorblind", 
    " loves to play video games", 
    " is half-Guatemalan", 
    "'s favorite food is enchiladas", 
    " has visited 38 of the 50 states in the USA"];

    var chosenPerson = "";

    var chosenQuestion = "";

    var pickPerson = ["mikeFacts", "woodsFacts"];


document.getElementById("newFact").addEventListener("click", function() {
    chosenPerson = pickPerson[Math.floor(Math.random() * pickPerson.length)]

    if(chosenPerson == "mikeFacts") {
        chosenQuestion = mikeFacts[Math.floor(Math.random() * mikeFacts.length)]
    }

    else if(chosenPerson == "woodsFacts") {
        chosenQuestion = woodsFacts[Math.floor(Math.random() * woodsFacts.length)]
    }

    document.getElementById("question").innerHTML = "Who" + chosenQuestion + "?"
});